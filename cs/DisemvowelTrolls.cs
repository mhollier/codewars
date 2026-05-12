using System.Linq;

Console.WriteLine(Kata.Disemvowel("This website is for losers LOL!"));

static class Kata
{
    public static string Disemvowel(string str)
    {
        string vowels = "aeiou";
        return string.Join("", str.Where(c => !vowels.Contains(Char.ToLower(c))));
    }
}