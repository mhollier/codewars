function countBits(n) {
  return n.toString(2).replaceAll('0', '').length;
}

console.log(countBits(7));