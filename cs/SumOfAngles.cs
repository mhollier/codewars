
// Console.WriteLine(Kata.Angle(3));
// Console.WriteLine(Kata.Angle(4));
// Console.WriteLine(Kata.Angle(5));
// Console.WriteLine(Kata.Angle(6));
// Console.WriteLine(Kata.Angle(7));
Console.WriteLine(Kata.Angle(27));


class Kata
{
    public static int Angle(int n)
    {
        double v = (180.0 - (360.0 / n)) * n;
        return (int)Math.Round(v);
    }
}