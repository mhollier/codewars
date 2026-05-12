// See https://aka.ms/new-console-template for more information
Console.WriteLine(Paper.Paperwork(5, 5));
Console.WriteLine(Paper.Paperwork(5,-5));
Console.WriteLine(Paper.Paperwork(5,0));

static class Paper
{
    public static int Paperwork(int n, int m)
    {
        return n < 0 || m < 0 ? 0 : n * m;
    }
}