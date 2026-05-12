Console.WriteLine(Kata.DuplicateEncode("din"));
Console.WriteLine(Kata.DuplicateEncode("recede"));
Console.WriteLine(Kata.DuplicateEncode("Success"));
Console.WriteLine(Kata.DuplicateEncode("(( @"));

static class Kata
{
    public static string DuplicateEncode(string word)
    {
        string result = "";
        foreach(char c in word.ToLower())
        {
            result += word.ToLower().Where(x => x == c).Count() == 1 ? "(" : ")";
        }
        return result;
    }
}