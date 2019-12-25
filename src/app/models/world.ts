import { Walker } from './walker';
import { State } from './tile';
import { Maze } from './maze';
import { Point } from './point';

///only 1 per program
export class World implements iDrawable
{
  maze:Maze;
  constructor()
  {
    this.maze = new Maze(4,5);
    this.maze.SetStartPoint(new Point(0,0));
    this.maze.TileAt(1,1).state = State.blocked;
    this.maze.TileAt(2,1).state = State.blocked;
    this.maze.TileAt(3,1).state = State.blocked;
    this.maze.TileAt(1,3).state = State.blocked;
    this.maze.TileAt(1,4).state = State.blocked;
    this.maze.TileAt(3,3).state = State.blocked;
    this.maze.TileAt(3,4).state = State.goal;
  }
  Run():void
  {
    let walker = new Walker(this.maze.start.coordinate);
  }
  Draw()
  {
    this.maze.Draw();
  }
}

