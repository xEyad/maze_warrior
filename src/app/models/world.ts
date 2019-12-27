import { Walker, Dir } from './walker';
import { State } from './tile';
import { Maze } from './maze';
import { Point } from './utility/point';

///only 1 per program
export class World implements iDrawable
{
  maze:Maze;
  walker:Walker;
  public get walkerPos() : Point {
    return  this.walker.curPos;
  }

  constructor()
  {
    this.maze = new Maze(4,5,new Point(0,0));
    this.maze.SetTileState(new Point(1,1),State.blocked);
    this.maze.SetTileState(new Point(2,1),State.blocked);
    this.maze.SetTileState(new Point(3,1),State.blocked);
    this.maze.SetTileState(new Point(1,3),State.blocked);
    this.maze.SetTileState(new Point(1,4),State.blocked);
    this.maze.SetTileState(new Point(3,3),State.blocked);
    this.maze.SetGoalAt(new Point(3,4));
    this.walker = new Walker(this.maze.start.coordinate);
  }

  UpdateModel()
  {
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
  private isNewPosValid(newPos:Point) : boolean
  {
    return  (
      Point.TotalDifference(this.walkerPos,newPos) == 1 &&
      (newPos.x >= 0 && newPos.x < this.maze.width) &&
      (newPos.y >= 0 && newPos.y < this.maze.height) &&
      this.maze.GetTileState(newPos) != State.blocked
      )

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

}

