// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript
export class Kata {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, '');
  }
}

/////////// npx mocha disemvowel.ts ///////////
import {assert} from "chai";

describe("disemvowel", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(Kata.disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
  });
});