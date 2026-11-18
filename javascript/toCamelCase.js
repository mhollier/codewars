function toCamelCase(str) {
  if (!str) return "";

  const words = str.split(/[-_]/);
  const response = [];
  for (i = 0; i < words.length; i++) {
    const word = words[i];
    response.push((i === 0 ? word[0] : word[0].toUpperCase()) + word.slice(1));
  }
  return response.join("");
}

console.log(toCamelCase(""));
console.log(toCamelCase("The_Stealth-Warrior"));
console.log(toCamelCase("the_Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));