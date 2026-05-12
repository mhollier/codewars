Console.WriteLine(string.Join(",", Kata.TwoSum(new[] { 1, 2, 3 }, 4)));
Console.WriteLine(string.Join(",", Kata.TwoSum(new [] { 1234, 5678, 9012 }, 14690)));
Console.WriteLine(string.Join(",", Kata.TwoSum(new [] { 2, 2, 3 }, 4)));

class Kata
{
    public static int[] TwoSum(int[] numbers, int target)
    {
        for (int i = 0; i < numbers.Length - 1; i++)
        {
            for (int j = i + 1; j < numbers.Length; j++)
            {
                if (i != j && numbers[i] + numbers[j] == target)
                    return new[] { i, j };
            }
        }
        return new int[0];
    }
}