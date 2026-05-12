using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

Console.WriteLine(string.Join(",", Kata.FriendOrFoe(new [] { "Ryan", "Kieran", "mark", "Jimmy", "1234"})));

static class Kata
{
    public static IEnumerable<string> FriendOrFoe(string[] names)
    {
        var lettersOnly = new Regex(@"[A-Za-z]+");
        return names.Where(name => name.Length == 4 && lettersOnly.IsMatch(name));
    }
}

