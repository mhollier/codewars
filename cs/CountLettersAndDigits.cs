using System.Text.RegularExpressions;

Console.WriteLine(Kata.CountLettersAndDigits("n!!ice!!123"));

// Determine how many letters (both uppercase and lowercase ASCII letters) 
// and digits are in a given string.
static class Kata
{
  public static int CountLettersAndDigits(string input)
  {
    return new Regex("[^a-z0-9]+").Replace(input.ToLower(), "").Length;
  }
}
