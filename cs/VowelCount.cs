using System.Text.RegularExpressions;

Console.WriteLine(Kata.GetVowelCount("abrecadabri"));

static class Kata
{
    public static int GetVowelCount(string str)
    {
        return Regex.Matches(str, @"[aeiou]").Count;
    }
}
