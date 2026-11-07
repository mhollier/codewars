function squareSum(numbers) {
  return numbers
    .map(x => x**2)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(squareSum([0, 3, 4, 5]));