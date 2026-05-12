//Console.WriteLine(StringMerger.isMerge("codewars", "cdwr", "oeas"));
Console.WriteLine(StringMerger.isMerge("Can we merge it? Yes, we can!", "n ee tYw n!", "Cawe mrgi? es, eca"));

class StringMerger
{
    public static bool isMerge(string s, string part1, string part2)
    {
        Queue<char> s1 = new Queue<char>(part1.ToCharArray());
        Queue<char> s2 = new Queue<char>(part2.ToCharArray());
        for (int i = 0; i < s.Length; i++)
        {
            if (s1.Count > 0 && s[i] == s1.Peek())
            {
                s1.Dequeue();
            }
            else if (s2.Count > 0 && s[i] == s2.Peek())
            {
                s2.Dequeue();
            }
            else 
            {
                return false;
            }
        }
        return s1.Count == 0 && s2.Count == 0;
    }
}
