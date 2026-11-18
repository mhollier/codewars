// https://www.codewars.com/kata/55d7e5aa7b619a86ed000070
function orderWord(s) {
  return !s 
    ? "Invalid String!"
    : s.split("").sort().join("");
}


console.log(orderWord(""));
console.log(orderWord(null));
console.log(orderWord("!Hi You!"));
console.log(orderWord("i\"d][@z!$r(^a&world%"));
