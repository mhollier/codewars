Console.WriteLine(Kata.Rgb(0, 0, 0));
Console.WriteLine(Kata.Rgb(173, 255, 47));
Console.WriteLine(Kata.Rgb(255, 255, 255));
Console.WriteLine(Kata.Rgb(255, 255, 300));

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result 
// in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

class Kata
{
  public static string Rgb(int r, int g, int b)
  {
    return Kata.ToHex(r) + Kata.ToHex(g) + Kata.ToHex(b);
  }

  static string ToHex(int x)
  {
    if (x <= 0)
      return "00";
    if (x >= 255)
      return "FF";
    return x.ToString("X2");
  }
}