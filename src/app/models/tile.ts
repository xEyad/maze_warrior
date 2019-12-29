import { Point } from './utility/point';

export class Tile
{
  constructor(state:State,coordinate:Point)
  {
    this.state = state;
    this._coordinate=coordinate;
    this.hasWalker = false;
    this.isGoal = false;
  }
  set isGoal(val:boolean)
  {
    if(val==true && this.state == State.blocked)
      throw `Can't set tile at ${this.coordinate} to goal because it's blocked`;
    this._isGoal = val;
  }
  get isGoal() : boolean
  {
    return this._isGoal;
  }
  set state(state:State)
  {
    if(this._isGoal && state == State.blocked)
      throw `Can't set state of tile ${this.coordinate} to ${State} because it has goal`;
    this._state = state;
  }
  get state() : Readonly<State>
  {
    return this._state;
  }
  set hasWalker(val:boolean)
  {
    if(val==true && this.state == State.blocked)
      throw `Can't Put walker at tile ${this.coordinate} because it's blocked`;
    this._hasWalker = val;
  }
  get hasWalker(): Readonly<boolean>
  {
    return this._hasWalker;
  }
  get coordinate():Readonly<Point>
  {
    return this._coordinate;
  }
  private _state:State;
  private _coordinate:Point;
  private _hasWalker:boolean;
  private _isGoal:boolean;
}
export enum State
{
  open = "open",
  blocked = "blocked",
}
