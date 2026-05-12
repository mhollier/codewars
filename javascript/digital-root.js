function digital_root(n) {
    let digits = n.toString();
    if (digits.length === 1) {
        return n;
    }
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    return digital_root(sum);
}

console.log(digital_root(456));
