function generateHashtag (str) {
    if (!str || str.trim().length === 0) {
        return false;
    }
    const words = str.split(' ').map(w => w.trim()).map(w => w.slice(0, 1).toUpperCase() + w.slice(1));
    const result = '#' + words.join('');
    return result.length > 140 ? false : result;
}

console.log(generateHashtag(''));
console.log(generateHashtag(' '.repeat(200)));
console.log(generateHashtag('Do We have A Hashtag'));
console.log(generateHashtag('Codewars'));
console.log(generateHashtag('Codewars Is Nice'));
console.log(generateHashtag('Codewars is nice'));
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'));
console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'));
console.log(generateHashtag('a'.repeat(139)));
console.log(generateHashtag('a'.repeat(140)));