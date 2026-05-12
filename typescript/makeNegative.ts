export const makeNegative = (num: number): number => {
  return num > 0 ? -1 * num : num;
};

//////////// npx mocha makeNegative.ts ////////////
console.log(makeNegative(0));
console.log(makeNegative(1));
console.log(makeNegative(-5));