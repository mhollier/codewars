function encodeRailFenceCipher(s, numberRails) {
    if (!s || s.length === 0) {
        return "";
    }

    var rows = new Array(numberRails);
    const filler = "|".repeat(s.length);
    for (i = 0; i < numberRails; i++) {
        rows[i] = [...filler];
    }

    var c = 0;
    while (c < s.length) {
        for (r = 0; r < numberRails && c < s.length; r++, c++) {
            rows[r][c] = s[c];
        }
        for (r = numberRails - 2; r > 0 && c < s.length; r--, c++) {
            rows[r][c] = s[c];
        }
    }

    var result = "";
    for (i = 0; i < numberRails; i++) {
        result += rows[i].filter(c => c !== '|').join('');
    }
    return result;
}

function decodeRailFenceCipher(s, numberRails) {
    if (!s || s.length === 0) {
        return "";
    }

    var rows = new Array(numberRails);
    const filler = "|".repeat(s.length);
    for (i = 0; i < numberRails; i++) {
        rows[i] = [...filler];
    }

    var c = 0;
    while (c < s.length) {
        for (r = 0; r < numberRails && c < s.length; r++, c++) {
            rows[r][c] = '*'
        }
        for (r = numberRails - 2; r > 0 && c < s.length; r--, c++) {
            rows[r][c] = '*'
        }
    }

    var sidx = 0;
    for (r = 0; r < numberRails, sidx < s.length; r++) {
        for (c = 0; c < s.length; c++) {
            if (rows[r][c] === '*') {
                rows[r][c] = s[sidx++];
            }
        }
    }

    c = 0;
    var result = "";
    while (c < s.length) {
        for (r = 0; r < numberRails && c < s.length; r++, c++) {
            result += rows[r][c];
        }
        for (r = numberRails - 2; r > 0 && c < s.length; r--, c++) {
            result += rows[r][c];
        }
    }
    return result;
}

console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));
console.log(encodeRailFenceCipher("Hello, World!", 3));
console.log(decodeRailFenceCipher("HLERDLOXLWYOZ", 5));
console.log(decodeRailFenceCipher("Hoo!el,Wrdl l", 3))