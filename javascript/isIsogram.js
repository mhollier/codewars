// https://www.codewars.com/kata/54ba84be607a92aa900000f1
function isIsogram(str) {
  const sorted = str.toLowerCase().split("").sort();
  for (i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) return false;
  }
  return true;
}

console.log(isIsogram(""));
console.log(isIsogram("a"));
console.log(isIsogram("aba"));
console.log(isIsogram("Dermatoglyphics"));
