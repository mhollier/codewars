function isPangram(input) {
    const alpha = "abcdefghijklmnopqrstuvwxyz".split('');
    const check = input.toLowerCase().split('');
    return alpha.every(c => check.includes(c));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram"));
