using System.Linq;

IList<Student> studentList = new List<Student>() { 
    new Student() { StudentID = 1, StudentName = "John", Age = 18, StandardID = 1 } ,
    new Student() { StudentID = 1, StudentName = "John", Age = 18, StandardID = 1 } ,
    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, StandardID = 2 } ,
    new Student() { StudentID = 3, StudentName = "Bill",  Age = 18, StandardID = 2 } ,
    new Student() { StudentID = 2, StudentName = "Steve",  Age = 21, StandardID = 1 } ,
    new Student() { StudentID = 5, StudentName = "Ron" , Age = 21 } 
};

// IList<Standard> standardList = new List<Standard>() { 
//     new Standard(){ StandardID = 1, StandardName="Standard 1"},
//     new Standard(){ StandardID = 2, StandardName="Standard 2"},
//     new Standard(){ StandardID = 3, StandardName="Standard 3"}
// };

// Console.WriteLine(string.Join(',', studentList.Where(s => s.Age > 18 && s.StandardID > 0).Select(s => s.StudentName)));
studentList.Where(s => s.Age > 18 && s.StandardID > 0).ToList().ForEach(s => Console.WriteLine(s.StudentName));
Console.WriteLine();
studentList.OrderBy(s => s.StudentName).ToList().ForEach(s => Console.WriteLine(s.StudentID + ": " + s.StudentName));
Console.WriteLine();
studentList.DistinctBy(s => s.StudentName).ToList().ForEach(s => Console.WriteLine(s.StudentName));

class Student 
{
    public int StudentID;
    public string? StudentName;
    public int Age;
    public int StandardID;
}

