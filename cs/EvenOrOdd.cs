Console.WriteLine(Solution.SolutionClass.EvenOrOdd(5));
Console.WriteLine(Solution.SolutionClass.EvenOrOdd(8));


namespace Solution
{
  public class SolutionClass
  {
    public static string EvenOrOdd(int number)
    {
      return number % 2 == 0 ? "Even" : "Odd";
    }
  }
}