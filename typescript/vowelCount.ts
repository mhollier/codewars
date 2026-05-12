export class Kata {
  static getCount(str: string): number {
    return str.replace(/[^aeiou]/gi, '').length;
  }
}

//////////// npx mocha vowelCount.ts ////////////

console.log(Kata.getCount("abracadabra"));