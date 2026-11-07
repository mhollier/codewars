function alphabetPosition(text) {
  let offsets = [];
  const baseOffset = 'a'.charCodeAt(0);
  const chars = text.toLowerCase().replace(/[^a-z]/g, '');
  for (i = 0; i < chars.length; i++) {
    offsets.push(chars.charCodeAt(i) - baseOffset + 1)
  }
  return offsets.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));