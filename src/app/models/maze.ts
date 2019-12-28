import {Tile,State} from './tile';
import {Point} from './utility/point';

export class Maze implements iDrawable
{
  readonly goal:Tile;
  readonly start:Tile;
  private walker:Tile;
  readonly width:number;
  readonly height:number;
  private maze:Tile[] = [];

  constructor(map:string)
  {
    let tiles:Tile[] = [];
    let height=1;
    let width=0;
    let start:Tile;
    let goal:Tile;
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

    let tilesIndex = 0;
    for (let i = 0; i < map.length; i++)
    {
      const char = map[i];
      let x = tilesIndex % width;
      let y = Math.floor(tilesIndex / width);
      let loc = new Point(x,y);
      if(char == 's')
      {
        start = new Tile(State.open,loc);
        tiles.push(start);
        tilesIndex++;
      }
      else if(char == 'x')
      {
        tiles.push(new Tile(State.blocked,loc));
        tilesIndex++;
      }
      else if(char == 'g')
      {
        goal = new Tile(State.open,loc);
        goal.SetAsGoal();
        tiles.push(goal);
        tilesIndex++;
      }
      else if(char == '-')
      {
        tiles.push(new Tile(State.open,loc));
        tilesIndex++;
      }
    }
    this.goal = goal;
    this.start = start;
    this.walker = this.start;
    this.width = width;
    this.height = height;
    this.maze = tiles;
  }
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
        else if (tile.IsGoal())
          mazeTxt+='G';
        else if (tile.state == State.open)
          mazeTxt+='-';
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
  private TileAt(point:Point) :Tile
  {
    if(!this.isInsideMaze(point))
      throw `point ${point} is outside of the maze!`;
    let index = this.to1D(point.x,point.y);
    return this.maze[index];
  }
}
