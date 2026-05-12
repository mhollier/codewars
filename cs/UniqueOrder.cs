using System.Collections.Generic;

string[] a1 = new string[] { "arp", "live", "strong", "arp", "sharp" };
string[] a2 = new string[] { "lively", "alive", "harp", "sharp", "armstrong" };

Console.WriteLine(string.Join(",", WhichAreIn.inArray(a1, a2)));
Console.WriteLine(string.Join(",", WhichAreIn.inArray(new string[] { "tarp", "mice", "bull" }, new string[] { "lively", "alive", "harp", "sharp", "armstrong" })));

class WhichAreIn
{
    public static string[] inArray(string[] array1, string[] array2)
    {
        // return array1.Where(s1 => array2.Any(s2 => s2.Contains(s1))).ToArray();
        var result = new List<string>();
        foreach (string s1 in array1)
        {
            foreach (string s2 in array2)
            {
                if (s2.Contains(s1) && s1.Length < s2.Length && !result.Contains(s1))
                {
                    result.Add(s1);
                }
            }
        }
        result.Sort();
        return result.ToArray();
    }
}