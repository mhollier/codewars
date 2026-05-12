using System.Globalization;

Console.WriteLine(MonthName(12));

static string MonthName(int num)
{
  return System.Globalization.CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(num);
}