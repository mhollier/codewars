function findMissingLetter(array)
{
    for (var i = 0; i < array.length - 1; i++) {
        const curr = array[i].charCodeAt(0);
        const next = array[i + 1].charCodeAt(0);
        if (next - curr > 1) {
            return String.fromCharCode(curr + 1);
        }
    }
    return ' ';
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));