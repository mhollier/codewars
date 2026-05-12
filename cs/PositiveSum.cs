Console.WriteLine(Kata.PositiveSum(new int[] { 1, 2, 3, 4, 5 }));
Console.WriteLine(Kata.PositiveSum(new int[] { 1, -2, 3, 4, 5 }));
Console.WriteLine(Kata.PositiveSum(new int[] { }));
Console.WriteLine(Kata.PositiveSum(new int[] { -1, -2, -3, -4, -5 }));

class Kata
{
    public static int PositiveSum(int[] arr)
    {
        return arr.AsQueryable().Where((x, idx) => x > 0).Sum();
    }
}
