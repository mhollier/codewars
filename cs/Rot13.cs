// https://www.codewars.com/kata/530e15517bc88ac656000716/train/csharp
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Console.WriteLine(Kata.Rot13("mTest"));
Console.WriteLine(Kata.Rot13("!zZ123@"));

public class Kata
{
  public static string Rot13(string message)
  {
    char[] chars = message.ToCharArray();
    for (int i = 0; i < chars.Length; i++)
    {
      if (System.Char.IsAsciiLetter(chars[i]))
      {
        chars[i] = (char)(System.Char.ToLower(chars[i]) <= 'm' ? chars[i] + 13 : chars[i] - 13);
      }
    }
    return string.Join("", chars);
  }
}