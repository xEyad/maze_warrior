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

  constructor(width:number,height:number)
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
        maze.goal.isGoal = true;
        tileIndex++;
      }
      else if(char==' ')
        tileIndex++;
    }
    maze.walker = maze.start;
    return maze;
  }
  get goalTile() : Readonly<Tile>
  {
    return this.goal;
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
