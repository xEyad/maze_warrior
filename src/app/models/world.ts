import { Walker, Dir } from './walker';
import { State } from './tile';
import { Maze } from './maze';
import { Point } from './utility/point';

///only 1 per program
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
    console.log(this.maze.toString());
  }
  MoveWalker(dir:Dir)
  {
    let newPos = this.getPosForDir(dir);
    if(this.isNewPosValid(newPos))
    {
      this.walker.Move(dir);
      this.maze.PutWalkerAt(this.walkerPos);
    }
  }
  TileState(location:Point):State
  {
    return this.maze.GetTileState(location);
  }
  get goalPos() : Point {
    return  this.maze.goalTile.coordinate;
  }
  get startPos() : Point {
    return  this.maze.startTile.coordinate;
  }
  get walkerPos() : Point {
    return  this.walker.CurPos();
  }

  private isNewPosValid(newPos:Point) : boolean
  {
    return  (
      Point.TotalDifference(this.walkerPos,newPos) == 1 &&
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
        break;
      case Dir.left:
        return new Point(this.walkerPos.x-1,this.walkerPos.y);
        break;
      case Dir.down:
        return new Point(this.walkerPos.x,this.walkerPos.y+1);
        break;
      case Dir.up:
        return new Point(this.walkerPos.x,this.walkerPos.y-1);
        break;
      default:
        break;
    }
  }

  private maze:Maze;
  readonly walker:Walker;

}

