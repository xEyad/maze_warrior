import {Tile,State} from './tile';
import {Point} from './utility/point';

export class Maze implements iDrawable
{
  private _goal:Tile;
  private _start:Tile;
  private walker:Tile;
  readonly width:number;
  readonly height:number;
  private maze:Tile[] = [];

  private constructor(width:number,height:number)
  {
    this.width = width;
    this.height = height;
    for (let y = 0; y < this.height; y++)
      for (let x = 0; x < this.width; x++)
        this.maze.push(new Tile(State.open,new Point(x,y)));
  }
  static MazeFromString(map:string) : Maze
  {
    let height=1;
    let width=0;
    for (let i = 0; i < map.length; i++)
    {
        if(map[i]=='\n')
        {
          width = i;
          break;
        }
    }
    for (let i = 0; i < map.length; i++)
    {
      if(map[i]=='\n')
        height++;
    }
    let maze = new Maze(width,height);

    let tileIndex = 0;
    for (let i = 0; i < map.length; i++)
    {
      const char = map[i];
      let x = tileIndex % (maze.width);
      let y = Math.floor(tileIndex / (maze.width));
      let loc = new Point(x,y);
      if(char == 'S'||char == 's')
      {
        maze.start = maze.TileAt(loc);
        tileIndex++;
      }
      else if(char == '+' || char == '-' || char == '|')
      {
        maze.SetTileState(loc,State.blocked);
        tileIndex++;
      }
      else if(char == 'G'||char == 'g')
      {
        maze.goal = maze.TileAt(loc);
        tileIndex++;
      }
      else if(char==' ')
        tileIndex++;
    }
    return maze;
  }
  static CompleteMaze(width:number,height:number,startPos:Point,goalPos:Point): Maze
  {
    let maze = new Maze(width,height);
    maze.start = maze.TileAt(startPos);
    maze.goal = maze.TileAt(goalPos);
    return maze;
  }
  private set goal(tile:Tile)
  {
    this._goal = tile;
    this._goal.isGoal = true;
  }
  private set start(tile:Tile)
  {
    this._start = tile;
    this.walker = this._start;
  }

  private get goal():Tile
  {
    return this._goal;
  }
  private get start():Tile
  {
    return this._start;
  }
  get goalTile() : Readonly<Tile>
  {
    return this._goal;
  }
  get startTile() : Readonly<Tile>
  {
    return this.start;
  }
  get walkerTile() : Readonly<Tile>
  {
    return this.walker;
  }
  get size() : number {
    return this.width*this.height;
  }
  get tiles() :Readonly<Tile>[]
  {
    return this.maze;
  }

  Talk():string
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
        else if (tile.isGoal)
          mazeTxt+='G';
        else if (tile.state == State.open)
          mazeTxt+=' ';
        else if (tile.state == State.blocked)
          mazeTxt+='x';
      }
      mazeTxt+='\n';
    }
    return `${mazeTxt}\nwalker at: ${this.walker.coordinate}\ngoal at: ${this.goal.coordinate}\nstart at: ${this.start.coordinate}`;
  }
  ChangeStartPos(pos:Point):void
  {
    if(!pos.Equals(this.goal.coordinate))
      this.start = this.TileAt(pos);
  }
  ChangeGoalPos(pos:Point):void
  {
    if(pos.Equals(this.start.coordinate))
      return;
    this.goal.isGoal = false;
    this.goal = this.TileAt(pos);
  }
  PutWalkerAt(point:Point) : void
  {
    this.walker.hasWalker = false;
    let newWalkerTile = this.TileAt(point);
    newWalkerTile.hasWalker = true;
    this.walker = newWalkerTile;
  }
  SetTileState(tileLocation:Point,newState:State) : void
  {
    this.TileAt(tileLocation).state = newState;
  }
  GetTileState(tileLocation:Point) : Readonly<State>
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
        else if (tile.isGoal)
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
    return this.pointTo1D(point) < this.size;
  }
  pointTo1D(point:Point) : number
  {
    return this.to1D(point.x,point.y);
  }
  to1D(x:number,y:number) : number
  {
    return y*this.width+x;
  }
  private TileAt(point:Point) : Tile
  {
    if(!this.isInsideMaze(point))
      throw `point ${point} is outside of the maze!`;
    let index = this.to1D(point.x,point.y);
    return this.maze[index];
  }
}
