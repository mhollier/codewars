// See https://aka.ms/new-console-template for more information
Console.WriteLine(String.Join(",", Kata.CountBy(1, 5)));
Console.WriteLine(String.Join(",", Kata.CountBy(2, 5)));
Console.WriteLine(String.Join(",", Kata.CountBy(3, 5)));

static class Kata
{
    public static int[] CountBy(int x, int n)
    {
        return Enumerable.Repeat(x, n).Select((v, idx) => v * (idx + 1)).ToArray();
    }
}