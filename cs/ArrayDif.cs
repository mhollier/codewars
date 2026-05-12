Console.WriteLine(string.Join(",", ArrayDiff(new[] { 1, 2, 3 }, new[] { 1, 2 })));
Console.WriteLine(string.Join(",", ArrayDiff(new[] { 1, 2, 3 }, new[] { 2 })));

int[] ArrayDiff(int[] a, int[] b)
{
  return a.Where(v => !b.Contains(v)).ToArray();
}
