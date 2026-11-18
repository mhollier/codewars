var isMonotone = function (arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

console.log(isMonotone([]));
console.log(isMonotone([1, 2, 3]));
console.log(isMonotone([3,2,2]));
