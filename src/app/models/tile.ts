import { Point } from './point';

export class Tile
{
  constructor(state:State,coordinate:Point)
  {
    this.state = state;
    this.coordinate=coordinate;
    this.hasWalker = false;
    this.isGoal = false;
  }
  SetAsGoal() : void
  {
    if(this.state == State.blocked)
      throw `Can't set tile at ${this.coordinate} to goal because it's blocked`;
    this.isGoal = true;
  }
  RemoveGoal() : void
  {
    this.isGoal = false;
  }
  IsGoal() : boolean {
    return this.isGoal
  }
  state:State;
  coordinate:Point;
  hasWalker:boolean;
  private isGoal:boolean;
}
export enum State
{
  open,
  blocked,
}
