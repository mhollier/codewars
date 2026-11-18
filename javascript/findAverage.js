// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
function findAverage(array) {
  return array.length > 0 ? array.reduce((sum, x) => sum + x) / array.length : 0;
}

console.log(findAverage([1,2,3,4]));
console.log(findAverage([]));