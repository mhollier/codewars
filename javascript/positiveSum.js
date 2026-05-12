function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((prev, curr) => prev + curr, 0);
}

console.log(positiveSum([]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
console.log(positiveSum([1,2,3,4,5]));
