// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript
export class Challenge {
  static solution(num: number) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += (i % 3 === 0 || i % 5 === 0) ? i : 0;
    }
    return sum;
  }
}

/////////// npx mocha multiplesOf3Or5.ts ///////////
import { assert } from "chai";

function test(num: number, expected: number) {
  assert.strictEqual(Challenge.solution(num), expected)
}

describe("solution", function () {
  it("should handle basic tests", function () {
    test(10, 23);
  });
});