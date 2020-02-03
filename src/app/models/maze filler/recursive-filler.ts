import { GameService } from './../../services/game.service';
import { Emath } from './../utility/eMath';
import { Point } from './../utility/point';
import { State } from './../tile';
import { Maze } from './../maze';

export class RecursiveFiller
{
  constructor(maze:Maze)
  {
    this.minWidth=3;
    this.minLength=3;
    this.maze = maze;
    this.doors = [];
    this.chambers = [];
    const topLeft = this.maze.tiles[0].coordinate;
    const botRight = this.maze.tiles[this.maze.tiles.length-1].coordinate;
    const pair = new ChamberPair(topLeft,botRight);
    this.chambers.push(pair);

  }
  ConstructInSteps(game:GameService):void
  {
    const fps = 10;
    const loopRef = setInterval(()=>{
      game.DoGameStep();
      this.DoConstructionStep();
      if(this.chambers.length==0)
        clearInterval(loopRef);
    },fps/1000);
  }
  Construct():void
  {
    while(this.chambers.length > 0)
    {
      this.DoConstructionStep();
    }
  }
  private DoConstructionStep():void
  {
    const pair = this.chambers.pop();
    this.GenerateDivisionPoints(pair.topLeft,pair.botRight);
    this.CreateWalls();
    this.AddChambers();
  }
  private AddChambers():void
  {
    this.AddTopLeftWall();
    this.AddTopRighttWall();
    this.AddBotLeftWall();
    this.AddBotRightWall();
  }
  private AddTopLeftWall():void
  {
    const topLeft = new Point(this.divisionPoint3.x,this.divisionPoint1.y);
    const botRight = this.IntersectionPoint();
    if(!this.IsChamberDimensionValid(topLeft,botRight))
      return;
    const pair = new ChamberPair(topLeft,botRight);
    this.chambers.push(pair);
  }
  private AddTopRighttWall():void
  {
    const topLeft = this.divisionPoint1;
    const botRight = this.divisionPoint4;
    if(!this.IsChamberDimensionValid(topLeft,botRight))
      return;
    const pair = new ChamberPair(topLeft,botRight);
    this.chambers.push(pair);
  }
  private AddBotLeftWall():void
  {
    const topLeft = this.divisionPoint3;
    const botRight = this.divisionPoint2;
    if(!this.IsChamberDimensionValid(topLeft,botRight))
      return;
    const pair = new ChamberPair(topLeft,botRight);
    this.chambers.push(pair);
  }
  private AddBotRightWall():void
  {
    const topLeft = this.IntersectionPoint();
    const botRight = new Point(this.divisionPoint4.x,this.divisionPoint2.y);
    if(!this.IsChamberDimensionValid(topLeft,botRight))
      return;
    const pair = new ChamberPair(topLeft,botRight);
    this.chambers.push(pair);
  }
  private IntersectionPoint():Point
  {
    return new Point(this.divisionPoint1.x,this.divisionPoint3.y);
  }
  private CreateWalls():void
  {
    this.CreateVeritcalWall();
    this.CreateHorizontalWall();
  }
  private CreateVeritcalWall():void
  {
    let foundNonEmptyTile = false;
    for (let y = this.divisionPoint1.y; y <= this.divisionPoint2.y; y++)
    {
      const coordinate = new Point(this.divisionPoint1.x,y);
      if(this.IsTileEmpty(coordinate))
        this.maze.SetTileState(coordinate,State.blocked);
      else
      {
        foundNonEmptyTile = true;
        this.CreateDoorAt(coordinate);
      }
    }
    if(!foundNonEmptyTile)
    {
      let coordinate:Point;
      do
      {
        const y = Emath.GetRandomInt(this.divisionPoint1.y,this.divisionPoint2.y+1);
        coordinate = new Point(this.divisionPoint1.x,y);
      }while(coordinate.Equals(this.IntersectionPoint()))

      this.CreateDoorAt(coordinate);
    }
  }
  private CreateHorizontalWall():void
  {
    let foundNonEmptyTile = false;
    for (let x = this.divisionPoint3.x; x <= this.divisionPoint4.x; x++)
    {
      const coordinate = new Point(x,this.divisionPoint3.y);
      if(this.IsTileEmpty(coordinate))
        this.maze.SetTileState(coordinate,State.blocked);
      else
      {
        foundNonEmptyTile = true;
        this.CreateDoorAt(coordinate);
      }
    }
    if(!foundNonEmptyTile)
    {
      let coordinate:Point;
      do
      {
        const x = Emath.GetRandomInt(this.divisionPoint3.x,this.divisionPoint4.x+1);
        coordinate = new Point(x,this.divisionPoint3.y);
      }while(coordinate.Equals(this.IntersectionPoint()))
      this.CreateDoorAt(coordinate);
    }
  }
  private GenerateDivisionPoints(start:Point,end:Point):void
  {
    do
    {
      this.divisionPoint1 = this.RandomPointOnXBetween(start,end);
      this.divisionPoint2 = new Point(this.divisionPoint1.x,end.y);
    }
    while(
      this.IsInDoors(this.divisionPoint2) &&
      this.IsInDoors(this.divisionPoint1)
      )

    do
    {
      this.divisionPoint3 = this.RandomPointOnYBetween(start,end);
      this.divisionPoint4 = new Point(end.x,this.divisionPoint3.y);
    }
    while(
      this.IsInDoors(this.divisionPoint3) &&
      this.IsInDoors(this.divisionPoint4)
    )
  }
  private IsInDoors(p:Point):boolean
  {
    for (const point of this.doors)
    {
      if(point.Equals(p))
        return true;
    }
    return false;
  }
  private RandomPointOnXBetween(start:Point,end:Point):Point
  {
    let x:number = Emath.GetRandomInt(start.x,end.x+1);
    return new Point(x,start.y);
  }
  private RandomPointOnYBetween(start:Point,end:Point):Point
  {
    let y:number = Emath.GetRandomInt(start.y,end.y+1);
    return new Point(start.x,y);
  }
  private IsTileEmpty(coordinate:Point):boolean
  {
    return (!this.maze.startTile.coordinate.Equals(coordinate) && !this.maze.goalTile.coordinate.Equals(coordinate));
  }
  private IsChamberDimensionValid(topLeft:Point,botRight:Point):boolean
  {
    const width = Math.abs(topLeft.x-botRight.x) - 1;
    const length = Math.abs(topLeft.y-botRight.y)- 1;
    return (width>this.minWidth && length>this.minLength);
  }
  private CreateDoorAt(coordinate:Point):void
  {
    this.maze.SetTileState(coordinate,State.open);
    this.doors.push(coordinate);
  }
  private maze:Maze;
  private divisionPoint1:Point;
  private divisionPoint2:Point;
  private divisionPoint3:Point;
  private divisionPoint4:Point;
  private chambers:Array<ChamberPair>;
  private doors:Array<Point>;
  private minLength;
  private minWidth;
}

class ChamberPair
{
  topLeft:Point;
  botRight:Point;
  constructor(topLeft,botRight)
  {
    this.topLeft = topLeft;
    this.botRight = botRight;
  }
}
