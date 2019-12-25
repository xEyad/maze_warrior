import { Point } from './point';

export class Tile
{
  constructor(state:State,coordinate:Point)
  {
    this.state = state;
    this.coordinate=coordinate;
  }
  state:State;
  coordinate:Point;
}
export enum State
{
  open,
  goal,
  blocked
}
