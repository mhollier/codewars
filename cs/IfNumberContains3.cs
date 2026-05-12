Console.WriteLine(Exercise.IfNumberContains3(7201432));
Console.WriteLine(Exercise.IfNumberContains3(87501));
Console.WriteLine(Exercise.IfNumberContains3(0));

static class Exercise 
{
    public static bool IfNumberContains3(int n)
    {
        char[] chars = n.ToString().ToCharArray();
        for (int i = 0; i < chars.Length; i++)
        {
            if (chars[i] == '3') 
            {
                return true;
            }
        }
        return false;
    }
}
