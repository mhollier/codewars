// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/csharp
// Write a method that takes an array of consecutive (increasing) letters as input 
// and that returns the missing letter in the array.

Console.WriteLine(Kata.FindMissingLetter(['a', 'b', 'c', 'd', 'f']));
Console.WriteLine(Kata.FindMissingLetter(['O', 'Q', 'R', 'S']));

class Kata
{
  public static char FindMissingLetter(char[] array)
  {
    for (int i = 1; i < array.Length; i++)
    {
      if ((array[i] - array[i - 1]) > 1)
        return (char)(array[i - 1] + 1);
    }
    throw new System.ArgumentException();
  }
}

