Console.WriteLine(BasicOp('+', 4, 7));

double BasicOp(char operation, double value1, double value2)
{
  switch (operation)
  {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return double.NaN;
  }
}
