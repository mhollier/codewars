function uniqueInOrder(iterable) {
    let result = []
    const inputValues = [...iterable]
    if (inputValues.length === 0) {
        return [];
    }
    result.push(inputValues[0]);
    for (i = 1; i < inputValues.length; i++) {
        if (result[result.length - 1] !== inputValues[i]) {
            result.push(inputValues[i])
        }
    }
    
    return result;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"))
console.log(uniqueInOrder([1,2,2,3,3]))
