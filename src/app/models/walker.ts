import { Point } from './point';
export class Walker
{
  constructor(start:Point)
  {
    this.curPoint = start;
  }
  visited:Point[];
  curPoint:Point;
  moveStack:Point[];
}
