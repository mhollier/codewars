Console.WriteLine(string.Join(",", Kata.MoveZeroes(a1)));

class Kata
{
    public static int[] MoveZeroes(int[] arr)
    {
        var working = new List<int>(arr);
        int count = working.RemoveAll(x => x == 0);
        working.AddRange(Enumerable.Repeat(0, count));
        return working.ToArray();
        // return arr.OrderBy(x => x == 0).ToArray();
    }
}