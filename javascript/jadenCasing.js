String.prototype.toJadenCase = function () {
    var result = "";
    var lastChar = " ";
    for (i=0; i<this.length; i++) {
        var currentChar = this.charAt(i);
        result += lastChar === ' ' ? currentChar.toUpperCase() : currentChar;
        lastChar = currentChar;
    }
    return result;
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());