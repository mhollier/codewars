function countBy(x, n) {
    let z = [];
    for (i = 0; i < n; i++) {
        z.push(x * (i + 1));
    }
    return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
