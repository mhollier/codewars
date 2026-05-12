
namespace Demo
{
    class Exercisee
    {
        public static void Main()
        {
            int[] numbers = { 67, 92, 153, 15 };
            int[] result = numbers.Where(n => n < 100 && n > 30).ToArray();
            Console.WriteLine(string.Join(',', result));
        }
    }
}
