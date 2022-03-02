import { Walker, Dir } from './walker';
import { State } from './tile';
import { Maze } from './maze';
import { Point } from './utility/point';

///only 1 per program
///responsible for keeping walker and maze always in SYNC
export class World implements iDrawable
{
  constructor(maze:Maze)
  {
    this.maze = maze;
    this.walker = new Walker(this.maze.startTile.coordinate);
  }

  Talk():string
  {
    return this.maze.Talk();
  }

  Draw()
  {
    this.maze.Draw();
  }

  MoveWalker(dir:Dir)
  {
    let newPos = this.getPosForDir(dir);
    if(this.isNewPosValid(newPos) && Point.TotalDifference(this.walkerPos,newPos) == 1)
    {
      this.walker.Move(dir);
      this.maze.PutWalkerAt(this.walkerPos);
    }
  }

  PutWalkerAt(loc:Point):void
  {
    if(this.isNewPosValid(loc))
    {
      this.maze.PutWalkerAt(loc);
      this.walker.MoveTo(loc);
    }
  }

  TileState(location:Point): Readonly<State>
  {
    return this.maze.GetTileState(location);
  }

  get goalPos() : Readonly<Point>  {
    return  this.maze.goalTile.coordinate;
  }

  get startPos() : Readonly<Point>  {
    return  this.maze.startTile.coordinate;
  }

  get walkerPos() : Readonly<Point>
  {
    return  this.walker.CurPos();
  }

  get width(): Readonly<number>
  {
    return this.maze.width;
  }

  get height(): Readonly<number>
  {
    return this.maze.height;
  }

  Maze(): Readonly<Maze>
  {
    return this.maze;
  }

  private isNewPosValid(newPos:Point) : boolean
  {
    return  (
      (newPos.x >= 0 && newPos.x < this.maze.width) &&
      (newPos.y >= 0 && newPos.y < this.maze.height) &&
      this.maze.GetTileState(newPos) != State.blocked
      );
  }

  private getPosForDir(dir:Dir) : Point
  {
    switch (dir)
    {
      case Dir.right:
        return new Point(this.walkerPos.x+1,this.walkerPos.y);
      case Dir.left:
        return new Point(this.walkerPos.x-1,this.walkerPos.y);
      case Dir.down:
        return new Point(this.walkerPos.x,this.walkerPos.y+1);
      case Dir.up:
        return new Point(this.walkerPos.x,this.walkerPos.y-1);
      default:
        break;
    }
  }

  private maze:Maze;
  readonly walker:Walker;

}

