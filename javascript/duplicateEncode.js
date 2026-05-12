function duplicateEncode(word) {
    let result = "";
    const lowerCaseWord = word.toLowerCase();
    for (i = 0; i < lowerCaseWord.length; i++) {        
        const count = lowerCaseWord.split(lowerCaseWord[i]).length - 1;
        result += count === 1 ? "(" : ")";
    }
    return result;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
