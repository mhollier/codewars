Console.WriteLine(Kata.ToUnderscore("TestController"));
Console.WriteLine(Kata.ToUnderscore("Am7Days"));
Console.WriteLine(Kata.ToUnderscore("My3CodeIs4TimesBetter"));
Console.WriteLine(Kata.ToUnderscore(1));

static class Kata
{
    public static string ToUnderscore(int str)
    {
        return str.ToString();
    }

    public static string ToUnderscore(string str)
    {
        var chars = str.ToCharArray();
        List<char> resultChars = new List<char>();
        for (int i = 0; i < chars.Length; i++)
        {
            char c = chars[i];
            if (Char.IsUpper(c) && i > 0)
            {
                resultChars.Add('_');
            }
            resultChars.Add(Char.ToLower(c));
        }
        return string.Join("", resultChars);
    }
}