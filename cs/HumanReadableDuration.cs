using System.Linq;

Console.WriteLine(HumanTimeFormat.formatDuration(0));
Console.WriteLine(HumanTimeFormat.formatDuration(1));
Console.WriteLine(HumanTimeFormat.formatDuration(62));
Console.WriteLine(HumanTimeFormat.formatDuration(120));
Console.WriteLine(HumanTimeFormat.formatDuration(3662));
Console.WriteLine(HumanTimeFormat.formatDuration(33243586));

class HumanTimeFormat
{
  public static string formatDuration(int seconds)
  {
    if (seconds == 0)
      return "now";

    string[] durationParts = [
      durationUnitText(seconds / 31536000, "year"),
      durationUnitText(seconds % 31536000 / 86400, "day"),
      durationUnitText(seconds % 86400 / 3600, "hour"),
      durationUnitText(seconds % 3600 / 60, "minute"),
      durationUnitText(seconds % 60, "second"),
    ];
    string responseText = string.Join(", ", durationParts.Where(s => s.Length > 0));
    int idx = responseText.LastIndexOf(',');
    return idx > 0 ? responseText[..idx] + " and " + responseText[(idx + 2)..] : responseText;
  }

  private static string durationUnitText(int duration, string unit)
  {
    if (duration == 0)
      return string.Empty;
    return duration > 1 ? $"{duration} {unit}s" : $"{duration} {unit}";
  }
}