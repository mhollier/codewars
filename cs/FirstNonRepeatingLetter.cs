Console.WriteLine(Kata.FirstNonRepeatingLetter("a"));
Console.WriteLine(Kata.FirstNonRepeatingLetter("stress"));
Console.WriteLine(Kata.FirstNonRepeatingLetter("moonmen"));

class Kata
{
  public static string FirstNonRepeatingLetter(string s)
  {
    char[] chars = s.ToLower().ToCharArray();
    for (int i = 0; i < chars.Length; i++) {
      if (System.Array.FindAll(chars, c => c == chars[i]).Length == 1)
        return s[i].ToString();
    }
    return "";
  }
}