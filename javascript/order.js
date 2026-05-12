function order(words) {
    if (!words || words.trim().length === 0) {
        return '';
    }

    const wordArray = words.split(' ');
    const sortedWordArray = wordArray.sort((a, b) => {
        const na = Number.parseInt(a.match(/\d/));
        const nb = Number.parseInt(b.match(/\d/));
        return na - nb; 
    })
    return sortedWordArray.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
console.log(order(''));
