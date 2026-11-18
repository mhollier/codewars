// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));