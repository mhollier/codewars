function vowelCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}

console.log(vowelCount('Abracadabra'));