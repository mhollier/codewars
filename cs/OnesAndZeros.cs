Console.WriteLine(Kata.BinaryArrayToNumber(new int[] { 0, 0, 0, 1 }));
Console.WriteLine(Kata.BinaryArrayToNumber(new int[] { 0, 0, 1, 0 }));
Console.WriteLine(Kata.BinaryArrayToNumber(new int[] { 0, 1, 0, 0 }));
Console.WriteLine(Kata.BinaryArrayToNumber(new int[] { 1, 0, 0, 0 }));
Console.WriteLine(Kata.BinaryArrayToNumber(new int[] { 1, 1, 1, 1 }));

class Kata
{
    public static int BinaryArrayToNumber(int[] binaryArray)
    {
        return Convert.ToInt32(string.Join("", binaryArray), 2);
    }
}