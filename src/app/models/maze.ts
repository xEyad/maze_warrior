import {Tile,State} from './tile';
import {Point} from './point';

export class Maze
{
  goal:Tile;
  start:Tile;
  width:number = 4;
  height:number = 5;
  maze:Tile[] = [
    new Tile(State.open,new Point(0,0)),
    new Tile(State.open,new Point(0,1)),
    new Tile(State.open,new Point(0,2)),
    new Tile(State.open,new Point(0,3)),
    new Tile(State.open,new Point(0,4)),

    new Tile(State.open,new Point(1,0)),
    new Tile(State.blocked,new Point(1,1)),
    new Tile(State.open,new Point(1,2)),
    new Tile(State.blocked,new Point(1,3)),
    new Tile(State.blocked,new Point(1,4)),

    new Tile(State.open,new Point(2,0)),
    new Tile(State.blocked,new Point(2,1)),
    new Tile(State.open,new Point(2,2)),
    new Tile(State.open,new Point(2,3)),
    new Tile(State.open,new Point(2,4)),

    new Tile(State.open,new Point(3,0)),
    new Tile(State.blocked,new Point(3,1)),
    new Tile(State.open,new Point(3,2)),
    new Tile(State.blocked,new Point(3,3)),
    new Tile(State.goal,new Point(3,4)),

    new Tile(State.open,new Point(4,0)),
    new Tile(State.open,new Point(4,1)),
    new Tile(State.open,new Point(4,2)),
    new Tile(State.open,new Point(4,3)),
    new Tile(State.open,new Point(4,4)),
  ];

  // constructor(width:number,height:number)
  // {
  //  for (let row = 0; row < width; row++)
  //   for (let col = 0; col < height; col++)
  //   {
  //     // this.maze.push(new Tile(State.open,new Point(row,col)));
  //   }
  // }

  Draw()
  {
    let mazeTxt = '';
    for (let row = 0; row < this.width; row++)
      for (let col = 0; col < this.height; col++)
      {
        let tile = this.maze[this.to1D(row,col)];
        switch (tile.state)
        {
          case State.open:
            mazeTxt+='-';
            break;
          case State.goal:
            mazeTxt+='G';
            break;
          case State.blocked:
            mazeTxt+='x';
            break;
          default:
            break;
        }
        mazeTxt+='\n';
      }
  }

  to1D(x:number,y:number) : number
  {
    return y*this.width+x;
  }  // solveMaze()
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
