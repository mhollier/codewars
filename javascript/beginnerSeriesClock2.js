function past(h, m, s) {
    return (s + m * 60 + h * 3600) * 1000
}

console.log(past(0,1,1));
console.log(past(1,1,1));
console.log(past(0,0,0));
console.log(past(1,0,1));
console.log(past(1,0,0));