using System.Text.RegularExpressions;

// Most frequently used words in a text
// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

Console.WriteLine(string.Join(",", TopWords.Top3("exdvtoex jowpc'uzl' ycyxcb")));
Console.WriteLine(string.Join(",", TopWords.Top3("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")));
Console.WriteLine(string.Join(",", TopWords.Top3("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")));
 Console.WriteLine(string.Join(",", TopWords.Top3("  //wont won't won't ")));
Console.WriteLine(string.Join(",", TopWords.Top3("  ...  ")));
Console.WriteLine(string.Join(",", TopWords.Top3("  ''  ")));

class TopWords
{
    public static List<string> Top3(string s)
    {
        Dictionary<string, int> dictionary = new Dictionary<string, int>();
        List<string> words = Regex.Matches(s.ToLower(), @"'?[a-z]+'?[a-z]*'?").Select(m => m.Value).ToList();
        foreach (string w in words)
            dictionary[w] = dictionary.ContainsKey(w) ? dictionary[w] + 1 : 1;
        return dictionary.OrderByDescending(kv => kv.Value).Take(3).Select(kv => kv.Key).ToList();
    }
}





