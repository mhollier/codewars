Console.WriteLine(string.Join(',', Permutations.SinglePermutations("a")));
Console.WriteLine(string.Join(',', Permutations.SinglePermutations("abc")));
Console.WriteLine(string.Join(',', Permutations.SinglePermutations("aabb")));
Console.WriteLine(string.Join(',', Permutations.SinglePermutations("abcd")));

class Permutations
{
    public static List<string> SinglePermutations(string s)
    {
        HashSet<string> result = new HashSet<string>();
        Generate(s.Length, s.ToCharArray(), result);
        return result.OrderBy(x => x).ToList();
    }

    private static void Generate(int k, char[] A, HashSet<string> result) 
    {
        if (k == 0)
        {
            result.Add(new string(A));
        }
        else
        {
            Generate(k - 1, A, result);
            for (int i = 0; i < k - 1; i++)
            {
                int swapIndex = (k % 2 == 0) ? i : 0;
                char tempChar = A[swapIndex];
                A[swapIndex] = A[k - 1];
                A[k - 1] = tempChar;
                Generate(k - 1, A, result);
            }
        }    
    }
}