function last(x) {
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

console.log(last('man i need a taxi up to ubud'));
console.log(last('what time are we climbing up the volcano'));
console.log(last('take me to semynak'));
