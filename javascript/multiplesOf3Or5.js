function solution(value) {
    let sum = 0;
    for (i = 0; i < value; i++) {
        sum += (i % 3 == 0 || i % 5 == 0) ? i : 0;
    }
    return sum;
}

console.log(solution(-1))
console.log(solution(10))
console.log(solution(15))
