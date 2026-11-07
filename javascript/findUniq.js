// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/
function findUniq(arr) {
  const map = new Map();
  arr.forEach((x) => {
    map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  });
  let result;
  map.forEach((value, key) => {
    if (value === 1) {
      result = key;
      return;
    }
  });
  return result;
}
console.log(findUniq([0, 0, 0.55, 0, 0]));
