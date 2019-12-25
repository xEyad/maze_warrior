import {Tile,State} from './tile';
import {Point} from './point';

export class Maze
{
  goal:Tile;
  start:Tile;
  width:number;
  height:number;
  maze:Tile[] = [];

  constructor(width:number,height:number)
  {
    this.width = width;
    this.height = height;
    for (let x = 0; x < width; x++)
      for (let y = 0; y < height; y++)
        this.maze.push(new Tile(State.open,new Point(x,y)));


    this.TileAt(1,1).state = State.blocked;
    this.TileAt(2,1).state = State.blocked;
    this.TileAt(3,1).state = State.blocked;
    this.TileAt(1,3).state = State.blocked;
    this.TileAt(1,4).state = State.blocked;
    this.TileAt(3,3).state = State.blocked;
    this.TileAt(3,4).state = State.goal;
  }

  TileAt(x:number,y:number) :Tile
  {
    let index = this.to1D(x,y);
    console.log(this.maze.length);
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
        console.log(`(${x},${y}) => ${index}`);

        let tile = this.maze[index];
        if (tile.state == State.open)
          mazeTxt+='-';
        if (tile.state == State.goal)
            mazeTxt+='G';
        if (tile.state == State.blocked)
          mazeTxt+='x';
      }
      mazeTxt+='\n';
    }
      // debugger
      console.log(mazeTxt);
  }

  to1D(x:number,y:number) : number
  {
    return y*this.width+x;
  }
  // solveMaze()
  // {
  //   let start = new Point(0,0);

  //   let curPath:Point[] = [start];
  //   let visitedPath:Point[] = [start];

  //   for (let rowIndex = 0; rowIndex < this.maze.length; rowIndex++)
  //   {
  //     const row = this.maze[rowIndex];
  //     for (let colIndex = 0; colIndex < row.length; colIndex++)
  //     {
  //       const cell = row[colIndex];
  //       let curPoint = new Point(rowIndex,colIndex);
  //       let tileState = cell;
  //       if(tileState==0)
  //         curPath.push(curPoint);
  //       else
  //       {}
  //     }
  //   }
}
