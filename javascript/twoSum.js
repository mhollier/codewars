function twoSum(numbers, target) {
    for (i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (i != j && numbers[i] + numbers[j] === target)
                return [i, j];
        }
    }
    return [];
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));