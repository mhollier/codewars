function arrayDiff(a, b) {
    return a.filter(c => !b.includes(c));
}

console.log(arrayDiff([1,2,3], [1,2]));
