function getGrade (s1, s2, s3) {
    const average = (s1 + s2 + s3)/3;
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';        
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';        
    }
    return 'F';
  }

  console.log(getGrade(95,90,93));
  console.log(getGrade(100,85,96));
  console.log(getGrade(92,93,94));

  console.log(getGrade(70,70,100));
  console.log(getGrade(82,85,87));
  console.log(getGrade(84,79,85));

  console.log(getGrade(70,70,70));
  console.log(getGrade(75,70,79));
  console.log(getGrade(60,82,76));

  console.log(getGrade(65,70,59));
  console.log(getGrade(66,62,68));
  console.log(getGrade(58,62,70));

  console.log(getGrade(44,55,52));
  console.log(getGrade(48,55,52));
  console.log(getGrade(58,59,60));
