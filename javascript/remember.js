function remember(str) {
  const map = new Map();
  for (i = 0; i < str.length; i++) {
    const c = str[i];
    const count = map.has(c) ? map.get(c).count + 1 : 1;
    const pos = count <= 2 ? i : map.get(c).pos;
    map.set(c, {char: c, pos: pos, count: count });
  }

  return Array.from(map.values())
    .filter(x => x.count > 1)
    .sort((a, b) => a.pos - b.pos)
    .map(x => x.char);
}

console.log(remember('Pippi'));
console.log(remember("apple"));
console.log(remember("apPle"));
console.log(remember("11 pinguin"));
