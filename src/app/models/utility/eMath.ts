export class Emath
{
  ///The maximum is exclusive and the minimum is inclusive
  static GetRandomInt(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
