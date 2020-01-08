import { Point } from './../utility/point';
import { Tile, State } from './../tile';
import { Maze } from './../maze';

export class RecursiveFiller
{
  constructor(maze:Maze)
  {
    this.maze = maze;
    this.isFirstTime = true;
  }
  Construct():void
  {
    const start = this.ChamberStartPoint();
    const end = this.ChamberEndPoint();
    this.GenerateDivisionPoints(start,end);
    this.CreateWalls();
    //record in a stack the newly generated 4 PAIRS that represents the start and end points of the 4 new chambers
    //repeate with new 4 chambers and don't forget to stop at certain size 2x2
  }
  private ChamberStartPoint() :Readonly<Point>
  {
    if(this.isFirstTime)
      return this.maze.tiles[0].coordinate;
  }
  private ChamberEndPoint() :Readonly<Point>
  {
    if(this.isFirstTime)
    {
      this.isFirstTime = false;
      return this.maze.tiles[this.maze.tiles.length-1].coordinate;
    }
  }
  private IntersectionPoint():Point
  {
    return new Point(this.division1.x,this.division3.y);
  }
  private CreateWalls():void
  {
    this.CreateVeritcalWall();
    this.CreateHorizontalWall();
  }
  private CreateVeritcalWall():void
  {
    let foundNonEmptyTile = false;
    const height = Math.abs(this.division1.y-this.division2.y);
    for (let y = this.division1.y; y < height; y++)
    {
      const coordinate = new Point(this.division1.x,y);
      if(this.IsTileEmpty(coordinate))
        this.maze.SetTileState(coordinate,State.blocked);
      else
        foundNonEmptyTile = true;
    }
    if(!foundNonEmptyTile)
    {
      const y = Emath.GetRandomInt(this.division1.y,this.division1.y+height+1);
      const coordinate = new Point(this.division1.x,y);
      this.maze.SetTileState(coordinate,State.blocked);
    }
  }
  private CreateHorizontalWall():void
  {
    let foundNonEmptyTile = false;
    const width = Math.abs(this.division1.x-this.division2.x);
    for (let x = this.division3.x; x < width; x++)
    {
      const coordinate = new Point(x,this.division3.y);
      if(this.IsTileEmpty(coordinate))
        this.maze.SetTileState(coordinate,State.blocked);
      else
        foundNonEmptyTile = true;
    }
    if(!foundNonEmptyTile)
    {
      const x = Emath.GetRandomInt(this.division3.x,this.division3.x+width+1);
      const coordinate = new Point(x,this.division3.y);
      this.maze.SetTileState(coordinate,State.blocked);
    }
  }
  private GenerateDivisionPoints(start:Point,end:Point):void
  {
    let offsetStart = new Point(start.x+2,start.y-2);
    let offsetEnd = new Point(end.x-2,end.y-2);
    do
    {
      this.division1 = this.RandomPointOnXBetween(offsetStart,offsetEnd);
      this.division2 = new Point(this.division1.x,end.y);
    }
    while(!this.ArePointsOnBlockedTiles(this.division1,this.division2))

    do
    {
      this.division3 = this.RandomPointOnYBetween(offsetStart,offsetEnd);
      this.division4 = new Point(start.x,this.division3.y);
    }
    while(!this.ArePointsOnBlockedTiles(this.division3,this.division4))
  }
  private ArePointsOnBlockedTiles(p1:Point,p2:Point):boolean
  {
    return (
      this.maze.GetTileState(p1) == State.blocked &&
      this.maze.GetTileState(p2) == State.blocked
      )
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
  private division1:Point;
  private division2:Point;
  private division3:Point;
  private division4:Point;
  private isFirstTime:boolean;
}
