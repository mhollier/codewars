Console.WriteLine(TimeFormat.GetReadableTime(0));
Console.WriteLine(TimeFormat.GetReadableTime(5));
Console.WriteLine(TimeFormat.GetReadableTime(60));
Console.WriteLine(TimeFormat.GetReadableTime(61));
Console.WriteLine(TimeFormat.GetReadableTime(86399));
Console.WriteLine(TimeFormat.GetReadableTime(359999));
Console.WriteLine(TimeFormat.GetReadableTime(3675));

static class TimeFormat
{
    public static string GetReadableTime(int totalSeconds)
    {
        int hours = (totalSeconds / 3600);
        int minutes = ((totalSeconds / 60) % 60);
        int seconds = (totalSeconds % 60);
        return string.Format("{0:00}:{1:00}:{2:00}", hours, minutes, seconds);
    }
}

