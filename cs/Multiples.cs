Console.WriteLine(Kata.Solution(10));
Console.WriteLine(Kata.Solution(-1));

static class Kata
{
    public static int Solution(int value)
    {
        int sum = 0;
        for (int i = 0; i < value; i++)
            sum += (i % 3 == 0 || i % 5 == 0) ? i : 0;
        return sum;
    }
}