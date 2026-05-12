function topThreeWords(text) {
    let dictionary = {};  
    const words = text.toLowerCase().match(/\'?[a-z]+\'?[a-z]*\'?/gi);
    if (!words) {
        return [];
    }

    for (const match of words) {        
        dictionary[match] = dictionary[match] ? dictionary[match] + 1 : 1;
    }
    const items = Object.keys(dictionary).map(key => [key, dictionary[key]]);
    return items.sort((a, b) => b[1] - a[1]).slice(0, 3).map(v => v[0]);
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));
console.log(topThreeWords("  ...  "));