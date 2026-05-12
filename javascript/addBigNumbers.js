function add(a, b) {
    if (a.length > b.length) {
        b = "0".repeat(a.length - b.length) + b;
    } else if (b.length > a.length) {
        a = "0".repeat(b.length - a.length) + a;
    }
    const anums = a.toString().split('').reverse();
    const bnums = b.toString().split('').reverse();

    let result = [];
    let remainder = 0;
    for (i = 0; i < anums.length; i++) {
        const columnTotal = parseInt(anums[i]) + parseInt(bnums[i]) + remainder;
        const value = columnTotal < 10 ? columnTotal : columnTotal - 10;
        result.unshift(value.toString());
        remainder = columnTotal > 9 ? 1 : 0;
    }
    if (remainder) {
        result.unshift(remainder.toString())
    }
    return result.join('');
}

console.log(add("1", "1"));
console.log(add("999", "999"));
console.log(add("888", "222"));
console.log(add("1372", "69"));
console.log(add("12", "456"));
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
