import { Walker, Dir } from './walker';
import { State } from './tile';
import { Maze } from './maze';
import { Point } from './point';

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
  Run():void
  {
    this.UpdateModel();
    this.Draw();
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
    if( Point.TotalDifference(this.walkerPos,newPos) == 1 &&
        this.maze.GetTileState(newPos) != State.blocked)
    {
      this.walker.Move(dir);
      this.maze.PutWalkerAt(this.walkerPos);
    }
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

