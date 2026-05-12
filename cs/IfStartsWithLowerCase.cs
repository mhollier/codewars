Console.WriteLine(Exercise.IfStartsWithLowerCase("tthis iis a ffake ssentence."));
Console.WriteLine(Exercise.IfStartsWithLowerCase("Alfa Beta gamma"));
Console.WriteLine(Exercise.IfStartsWithLowerCase("1 2 3 7 8 9 a b c x y z"));

static class Exercise
{
    public static string IfStartsWithLowerCase(string input)
    {
        string[] words = input.Split(' ');
        var result = new List<string>();
        for (int i = 0; i < words.Length; i++)
        {
            string word = words[i];
            if (!string.IsNullOrEmpty(word))
            {
                result.Add(Char.IsLower(word[0]) ? word.Substring(1) : word);
            }
        }
        return string.Join(' ', result.Where(w => !string.IsNullOrWhiteSpace(w)));
    }
}