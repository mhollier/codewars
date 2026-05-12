Console.WriteLine(Kata.Smash(new string[] {"this", "is", "a", "really", "long", "sentence"}));

class Kata
{
  public static string Smash(string[] words)
  {
    return string.Join(" ", words).Trim();
  }
}