Console.WriteLine(Multiplier.Multiply(1));
Console.WriteLine(Multiplier.Multiply(2));
Console.WriteLine(Multiplier.Multiply(8));
Console.WriteLine(Multiplier.Multiply(4));
Console.WriteLine(Multiplier.Multiply(5));

class Multiplier
{
    public static int Multiply(int x)
    {
        return x % 2 == 0 ? x * 8 : x * 9;
    }
}