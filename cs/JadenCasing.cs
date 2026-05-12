using System.Globalization;

Console.WriteLine("How can mirrors be real if our eyes aren't real".ToJadenCase());

static class JadenCase
{
    public static string ToJadenCase(this string phrase)
    {
        return CultureInfo.CurrentCulture.TextInfo.ToTitleCase(phrase);
        // string result = "";
        // char lastChar = ' ';
        // for (int i = 0; i < phrase.Length; i++) 
        // {
        //     char currentChar = phrase[i];
        //     result += lastChar == ' ' ? Char.ToUpperInvariant(currentChar) : currentChar;
        //     lastChar = currentChar;
        // }
        // return result;
    }
}
