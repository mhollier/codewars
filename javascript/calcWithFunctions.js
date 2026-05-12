function calcOrValue(left, rhs) {
    if (!rhs) {
        return left;
    }

    switch (rhs.op) {
        case '+':
            return left + rhs.right;
        case '-':
            return left - rhs.right;
        case '*':
            return left * rhs.right;
        case '/':
            return Math.floor(left / rhs.right);
    }
}
function zero(rhs) { return calcOrValue(0, rhs); }
function one(rhs) { return calcOrValue(1, rhs); }
function two(rhs) { return calcOrValue(2, rhs); }
function three(rhs) { return calcOrValue(3, rhs); }
function four(rhs) { return calcOrValue(4, rhs); }
function five(rhs) { return calcOrValue(5, rhs); }
function six(rhs) { return calcOrValue(6, rhs); }
function seven(rhs) { return calcOrValue(7, rhs); }
function eight(rhs) { return calcOrValue(8, rhs); }
function nine(rhs) { return calcOrValue(9, rhs); }

function plus(right) { return {op: '+', right: right}; }
function minus(right) { return {op: '-', right: right}; }
function times(right) { return {op: '*', right: right}; }
function dividedBy(right) { return {op: '/', right: right};  }

console.log("7 + 5 = " + seven(plus(five())));
console.log("7 - 5 = " + seven(minus(five())));
console.log("7 * 5 = " + seven(times(five())));
console.log("9 / 4 = " + nine(dividedBy(four())));
console.log("6 / 2 = " + six(dividedBy(two())));