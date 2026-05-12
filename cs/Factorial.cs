using System.Linq;
using System.Collections.Generic;

Console.WriteLine(Kata.Factorial(5));

static class Kata
{
    public static int Factorial(int num)
    {
        var vals = Enumerable.Range(1, num).Reverse();
        return vals.Aggregate(1, (total, next) => total * next);
		// int factorial = num;
	 	// for (int i = num - 1; i > 0; i--)
		// {
		// 	factorial *= i;
		// }
	  	// return factorial;
    }
}