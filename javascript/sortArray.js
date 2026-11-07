function sortArray(array) {
  let oddSorted = array.filter(x => x % 2).sort((a, b) => a - b);
  let i = 0;
  oddSorted.forEach(oddNum => {
    while (array[i] % 2 === 0) i++;
    array[i] = oddNum;
    i++;
  });
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));