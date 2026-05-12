function disemvowel(text) {
    return text.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'));