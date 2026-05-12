function toRgbHex(x) {
    if (x <= 0) {
        return "00";
    }
    if (x >= 255) {
        return "FF";
    }
    return x.toString(16).toUpperCase().padStart(2, '0');
}

function rgb(r, g, b) {
    return toRgbHex(r) + toRgbHex(g) + toRgbHex(b);
}


console.log(rgb(0, 0, 0));      // 000000
console.log(rgb(0, 0, -20));    // 000000
console.log(rgb(300,255,256));  // FFFFFF
console.log(rgb(173, 255, 47)); // ADFF2F
console.log(rgb(297,13,144));   // FF0D90