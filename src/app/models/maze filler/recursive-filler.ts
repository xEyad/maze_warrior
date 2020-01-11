import { Emath } from './../utility/eMath';
import { Point } from './../utility/point';
import { State } from './../tile';
import { Maze } from './../maze';

export class RecursiveFiller
{
  constructor(maze:Maze)
  {
    this.maze = maze;
    this.chambers = [];
    const topLeft = this.maze.tiles[0].coordinate;
    const botRight = this.maze.tiles[this.maze.tiles.length-1].coordinate;
    const pair = new ChamberPair(topLeft,botRight);
    this.chambers.push(pair);

  }
  Construct():void
  {
    while(this.chambers.length > 0)
    {
      const pair = this.chambers.pop();
      this.GenerateDivisionPoints(pair.topLeft,pair.botRight);
      this.CreateWalls();
      this.AddChambers();
    }
    //repeate with new 4 chambers and don't forget to stop at certain size 2x2
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
    const pair = new ChamberPair(topLeft,botRight);
    this.chambers.push(pair);
  }
  private AddTopRighttWall():void
  {
    const topLeft = this.divisionPoint1;
    const botRight = this.divisionPoint4;
    const pair = new ChamberPair(topLeft,botRight);
    this.chambers.push(pair);
  }
  private AddBotLeftWall():void
  {
    const topLeft = this.divisionPoint3;
    const botRight = this.divisionPoint2;
    const pair = new ChamberPair(topLeft,botRight);
    this.chambers.push(pair);
  }
  private AddBotRightWall():void
  {
    const topLeft = this.IntersectionPoint();
    const botRight = new Point(this.divisionPoint4.x,this.divisionPoint2.y);
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
        foundNonEmptyTile = true;
    }
    if(!foundNonEmptyTile)
    {
      const y = Emath.GetRandomInt(this.divisionPoint1.y,this.divisionPoint2.y+1);
      const coordinate = new Point(this.divisionPoint1.x,y);
      this.maze.SetTileState(coordinate,State.open);
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
        foundNonEmptyTile = true;
    }
    if(!foundNonEmptyTile)
    {
      const x = Emath.GetRandomInt(this.divisionPoint3.x,this.divisionPoint4.x+1);
      const coordinate = new Point(x,this.divisionPoint3.y);
      this.maze.SetTileState(coordinate,State.open);
    }
  }
  private GenerateDivisionPoints(start:Point,end:Point):void
  {
    let offsetStart = new Point(start.x+2,start.y+2);
    let offsetEnd = new Point(end.x-2,end.y-2);
    do
    {
      this.divisionPoint1 = this.RandomPointOnXBetween(offsetStart,offsetEnd);
      this.divisionPoint2 = new Point(this.divisionPoint1.x,offsetEnd.y);
    }
    while(this.ArePointsOnBlockedTiles(this.divisionPoint1,this.divisionPoint2))

    do
    {
      this.divisionPoint3 = this.RandomPointOnYBetween(offsetStart,offsetEnd);
      this.divisionPoint4 = new Point(offsetEnd.x,this.divisionPoint3.y);
    }
    while(this.ArePointsOnBlockedTiles(this.divisionPoint3,this.divisionPoint4))
  }
  private ArePointsOnBlockedTiles(p1:Point,p2:Point):boolean
  {
    return (
      this.maze.GetTileState(p1) == State.blocked ||
      this.maze.GetTileState(p2) == State.blocked
      );
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
  private maze:Maze;
  private divisionPoint1:Point;
  private divisionPoint2:Point;
  private divisionPoint3:Point;
  private divisionPoint4:Point;
  private chambers:Array<ChamberPair>;
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
