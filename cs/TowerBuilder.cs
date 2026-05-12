// Console.WriteLine(string.Join("\r\n", Kata.TowerBuilder(4)));
Console.WriteLine(string.Join("\r\n", Kata.TowerBuilder(25)));

class Kata
{
    public static string[] TowerBuilder(int nFloors)
    {
        var tower = new List<string>();
        for (int i = 0; i < nFloors; i++)
        {
            var spaces = new string(' ', nFloors - i - 1);
            var stars = new string('*', 2 * (i + 1) - 1);
            tower.Add(spaces + stars + spaces);
        }
        return tower.ToArray();
    }
}