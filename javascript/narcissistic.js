function narcissistic(value) {
  const digits = value.toString().split('');
  return value === digits.reduce((sum, curr) => sum + Math.pow(curr, digits.length), 0);
}

console.log(narcissistic(153));
console.log(narcissistic(122));
console.log(narcissistic(7));