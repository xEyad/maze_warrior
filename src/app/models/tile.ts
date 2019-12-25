class Tile
{
  constructor(state:State,coordinate:Point)
  {
    this.State = state;
    this.coordinate=coordinate;
  }
  State:State;
  coordinate:Point;
}
enum State
{
  open,
  goal,
  blok
}
