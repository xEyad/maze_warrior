import {Tile,State} from './tile';
import {Point} from './point';

export class Maze
{
  goal:Tile;
  start:Tile;
  width:number;
  height:number;
  maze:Tile[] = [];

  public get size() : number {
    return this.width*this.height;
  }

  constructor(width:number,height:number)
  {
    this.width = width;
    this.height = height;
    for (let x = 0; x < width; x++)
      for (let y = 0; y < height; y++)
        this.maze.push(new Tile(State.open,new Point(x,y)));

    this.SetStartPoint(new Point(0,0));
    this.TileAt(1,1).state = State.blocked;
    this.TileAt(2,1).state = State.blocked;
    this.TileAt(3,1).state = State.blocked;
    this.TileAt(1,3).state = State.blocked;
    this.TileAt(1,4).state = State.blocked;
    this.TileAt(3,3).state = State.blocked;
    this.TileAt(3,4).state = State.goal;
  }
  SetStartPoint(point:Point)
  {
    if(!this.isInsideMaze(point))
      throw `point ${point}`;
    this.start = this.maze[this.pointTo1D(point)];
  }
  TileAt(x:number,y:number) :Tile
  {
    let index = this.to1D(x,y);
    return this.maze[index];
  }
  Draw()
  {
    let mazeTxt = '';
    for (let x = 0; x < this.width; x++)
    {
      for (let y = 0; y < this.height; y++)
      {
        let index = this.to1D(x,y);
        let tile = this.maze[index];
        if(tile ==  this.start)
          mazeTxt+='S';
        else if (tile.state == State.open)
          mazeTxt+='-';
        else if (tile.state == State.goal)
            mazeTxt+='G';
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
}
