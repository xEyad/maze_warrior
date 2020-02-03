import { Point } from './utility/point';
export class TileMark
{
  private constructor(public type:Mark,public location:Point){}
  static indexed(location:Point) : TileMark
  {
    return new TileMark(Mark.indexed,location);
  }
  static none(location:Point) : TileMark
  {
    return new TileMark(Mark.none,location);
  }

}
export enum Mark
{
  indexed,
  start,
  none
}
