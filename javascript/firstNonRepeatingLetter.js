function firstNonRepeatingLetter(s) {   
    const chars = [...s.toLowerCase()];
    for (i = 0; i < chars.length; i++) {
        if (chars.filter(x => x === chars[i]).length === 1) {
            return s.charAt(i);
        }
    }
    return "";
}

console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('aaaaa'));
console.log(firstNonRepeatingLetter(''));
console.log(firstNonRepeatingLetter('sTreSS'));
console.log(firstNonRepeatingLetter('moonmen'));
