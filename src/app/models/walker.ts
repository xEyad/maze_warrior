import { Point } from './point';
export class Walker
{
  constructor(start:Point)
  {
    this.curPos = start;
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
      case Dir.bot:
        this.MoveYBy(1);
        break;
      case Dir.top:
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
  visited:Point[] = [];
  curPos:Point;
  moveStack:Point[] = [];
}

export enum Dir
{
  right,
  left,
  top,
  bot
}
