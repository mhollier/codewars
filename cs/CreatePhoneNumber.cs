Console.WriteLine(Kata.CreatePhoneNumber(new int[]{1,2,3,4,5,6,7,8,9,0}));
Console.WriteLine(Kata.CreatePhoneNumber(new int[]{0,0,0,4,5,6,7,8,9,0}));
Console.WriteLine(Kata.CreatePhoneNumber(new int[]{9,9,9,9,9,9,9,9,9,9}));

static class Kata
{
    public static string CreatePhoneNumber(int[] numbers)
    {
        return ulong.Parse(string.Concat(numbers)).ToString("(000) 000-0000");
    }
}