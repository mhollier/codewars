Console.WriteLine(Kata.MultiplesOf3Or5(-1));
Console.WriteLine(Kata.MultiplesOf3Or5(10));
Console.WriteLine(Kata.MultiplesOf3Or5(15));

static class Kata {
    public static int MultiplesOf3Or5(int value) 
    {
        int result = 0;
        for (int i = 0; i < value; i++) {
            result += (i % 3 == 0) || (i % 5 == 0) ? i : 0;
        }
        return result;
    }
}
