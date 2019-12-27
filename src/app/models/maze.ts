import {Tile,State} from './tile';
import {Point} from './utility/point';

export class Maze implements iDrawable
{
  private goal:Tile;
  private start:Tile;
  private walker:Tile;
  readonly width:number;
  readonly height:number;
  private maze:Tile[] = [];

  public get goalTile() : Tile
  {
    return this.goal;
  }
  public get startTile() : Tile
  {
    return this.start;
  }
  public get walkerTile() : Tile
  {
    return this.walker;
  }
  public get size() : number {
    return this.width*this.height;
  }

  constructor(width:number,height:number,start:Point)
  {
    this.width = width;
    this.height = height;
    for (let y = 0; y < height; y++)
      for (let x = 0; x < width; x++)
        this.maze.push(new Tile(State.open,new Point(x,y)));
    this.SetStartPoint(start);
  }
  PutWalkerAt(point:Point) : void
  {
    this.walker.hasWalker = false;
    let newWalkerTile = this.TileAt(point);
    newWalkerTile.hasWalker = true;
    this.walker = newWalkerTile;
  }
  SetGoalAt(point:Point) : void
  {
    if(this.goal)
      this.goal.RemoveGoal();
    this.goal = this.TileAt(point);
    this.goal.SetAsGoal();
  }
  SetStartPoint(point:Point) : void
  {
    if(this.start)
      this.start.hasWalker = false;
    this.start = this.TileAt(point);
    this.start.hasWalker = true;
    this.walker = this.start;
  }
  SetTileState(tileLocation:Point,newState:State) : void
  {
    this.TileAt(tileLocation).state = newState;
  }
  GetTileState(tileLocation:Point) : State
  {
    return this.TileAt(tileLocation).state;
  }
  Draw() : void
  {
    let mazeTxt = '';
    for (let y = 0; y < this.height; y++)
    {
      for (let x = 0; x < this.width; x++)
      {
        let index = this.to1D(x,y);
        let tile = this.maze[index];
        if(tile.hasWalker)
          mazeTxt+='W';
        else if(tile ==  this.start)
          mazeTxt+='S';
        else if (tile.IsGoal())
          mazeTxt+='G';
        else if (tile.state == State.open)
          mazeTxt+='-';
        else if (tile.state == State.blocked)
          mazeTxt+='x';
      }
      mazeTxt+='\n';
    }
      console.log(mazeTxt);
  }
  isInsideMaze(point:Point) : boolean
  {
    return this.pointTo1D(point)<this.size;
  }
  pointTo1D(point:Point) : number
  {
    return this.to1D(point.x,point.y);
  }
  to1D(x:number,y:number) : number
  {
    return y*this.width+x;
  }
  toString():string
  {
    return `walker at: ${this.walker.coordinate}\ngoal at: ${this.goal.coordinate}\nstart at: ${this.start.coordinate}`;
  }

  private TileAt(point:Point) :Tile
  {
    if(!this.isInsideMaze(point))
      throw `point ${point} is outside of the maze!`;
    let index = this.to1D(point.x,point.y);
    return this.maze[index];
  }
}
