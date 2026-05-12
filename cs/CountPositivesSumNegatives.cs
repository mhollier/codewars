using System;
using System.Collections.Generic;
using System.Linq;

Console.WriteLine(string.Join(',', Kata.CountPositivesSumNegatives(new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 })));
static class Kata
{
    public static int[] CountPositivesSumNegatives(int[] input)
    {
        return input == null || input.Length == 0
            ? new int[] { }
            : new[] {
                input.Count(x => x > 0),
                input.Where(x => x < 0).Sum()
                };
    }
}