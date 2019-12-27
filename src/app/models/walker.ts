import { Point } from './utility/point';
export class Walker
{
  constructor(start:Point)
  {
    this.curPos = start;
  }

  MoveStack():Point[]
  {
    return this.moveStack;
  }
  VisitedPoints():Point[]
  {
    return this.visited;
  }
  Move(dir:Dir):void
  {
    switch (dir)
    {
      case Dir.right:
        this.MoveXBy(1);
        break;
      case Dir.left:
        this.MoveXBy(-1);
        break;
      case Dir.down:
        this.MoveYBy(1);
        break;
      case Dir.up:
        this.MoveYBy(-1);
        break;
      default:
        break;
    }


  }
  private MoveXBy(d:number)
  {
    let p = new Point(this.curPos.x+d,this.curPos.y);
    this.MoveTo(p);
  }
  private MoveYBy(d:number)
  {
    let p = new Point(this.curPos.x,this.curPos.y+d);
    this.MoveTo(p);
  }
  private MoveTo(point:Point):void
  {
    this.AddToVisited(point);
    this.moveStack.push(point);
    this.curPos = point;
  }
  private AddToVisited(point:Point):void
  {
    if(!this.visited.includes(point))
      this.visited.push(point);
  }

  private visited:Point[] = [];
  private curPos:Point;
  private moveStack:Point[] = [];
}

export enum Dir
{
  right,
  left,
  up,
  down
}
