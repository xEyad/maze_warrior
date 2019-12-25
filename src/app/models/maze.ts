class Maze
{
  goal:Tile;
  start:Tile;
  maze:Tile[] = [
    new Tile(State.open,new Point(0,0)),
    new Tile(State.open,new Point(0,1)),
    new Tile(State.open,new Point(0,2)),
    new Tile(State.open,new Point(0,3)),
    new Tile(State.open,new Point(0,4)),

    new Tile(State.open,new Point(1,0)),
    new Tile(State.open,new Point(1,1)),
    new Tile(State.open,new Point(1,2)),
    new Tile(State.open,new Point(1,3)),
    new Tile(State.open,new Point(1,4)),

    new Tile(State.open,new Point(2,0)),
    new Tile(State.open,new Point(2,1)),
    new Tile(State.open,new Point(2,2)),
    new Tile(State.open,new Point(2,3)),
    new Tile(State.open,new Point(2,4)),

    new Tile(State.open,new Point(3,0)),
    new Tile(State.open,new Point(3,1)),
    new Tile(State.open,new Point(3,2)),
    new Tile(State.open,new Point(3,3)),
    new Tile(State.open,new Point(3,4)),

    new Tile(State.open,new Point(4,0)),
    new Tile(State.open,new Point(4,1)),
    new Tile(State.open,new Point(4,2)),
    new Tile(State.open,new Point(4,3)),
    new Tile(State.open,new Point(4,4)),
  ];

  constructor(rows:number,columns:number)
  {
   for (let row = 0; row < rows; row++)
    for (let col = 0; col < columns; col++)
    {
      // this.maze.push(new Tile(State.open,new Point(row,col)));
    }
  }
  solveMaze()
  {
    let start = new Point(0,0);

    let curPath:Point[] = [start];
    let visitedPath:Point[] = [start];

    for (let rowIndex = 0; rowIndex < this.maze.length; rowIndex++)
    {
      const row = this.maze[rowIndex];
      for (let colIndex = 0; colIndex < row.length; colIndex++)
      {
        const cell = row[colIndex];
        let curPoint = new Point(rowIndex,colIndex);
        let tileState = cell;
        if(tileState==0)
          curPath.push(curPoint);
        else
        {}
      }
    }
}
