Console.WriteLine(string.Join(',', Kata.MyLanguages(new Dictionary<string, int> {{"Java", 10}, {"Ruby", 80}, {"Python", 65}})));
Console.WriteLine(string.Join(',', Kata.MyLanguages(new Dictionary<string, int> {{"Hindi", 60}, {"Greek", 71}, {"Dutch", 93}})));

static class Kata
{
    public static IEnumerable<string> MyLanguages(Dictionary<string, int> results)
    {
        return results.Where(e => e.Value >=  60).OrderByDescending(e => e.Value).Select(e => e.Key).ToArray();
    }
}