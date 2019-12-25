import { Walker } from './walker';
import { State } from './tile';
import { Maze } from './maze';
import { Point } from './point';

class World
{
  CreateMaze() : Maze
  {
    let maze = new Maze(4,5);
    maze.SetStartPoint(new Point(0,0));
    maze.TileAt(1,1).state = State.blocked;
    maze.TileAt(2,1).state = State.blocked;
    maze.TileAt(3,1).state = State.blocked;
    maze.TileAt(1,3).state = State.blocked;
    maze.TileAt(1,4).state = State.blocked;
    maze.TileAt(3,3).state = State.blocked;
    maze.TileAt(3,4).state = State.goal;
    return maze;
  }
  Run():void
  {
    let maze = this.CreateMaze();
    let walker = new Walker(maze.start.coordinate);
  }
}

let world = new World();
export{world};
