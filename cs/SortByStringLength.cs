Console.WriteLine(string.Join(',', Kata.SortByLength(new string[] { "Beg", "Life", "I", "To" })));

class Kata
{
    public static string[] SortByLength(string[] array)
    {
        return array.OrderBy(s => s.Length).ToArray();
    }
}