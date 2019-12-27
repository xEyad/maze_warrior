export class Point
{
  constructor(x:number,y:number)
  {
    this.x = x;
    this.y = y;
  }
  x:number;
  y:number;

  toString():string
  {
    return `(${this.x},${this.y})`;
  }
  Equals(p:Point) : boolean
  {
    return p.x == this.x && p.y == this.y;
  }
  static TotalDifference(p1:Point,p2:Point) : number
  {
    return Math.abs((p1.x + p1.y) - (p2.x+p2.y));
  }
}
