export function solution(str: string): string {
  return str.split('').reverse().join('');
}

/////////// npx mocha reverseString.ts ///////////
import { assert } from "chai";
import 'mocha';

describe("Sample Test Cases", function () {
  it("Should return a string", function () {
    assert.equal(solution('world'), 'dlrow');
    assert.equal(solution('hello'), 'olleh');
    assert.equal(solution(''), '');
    assert.equal(solution('h'), 'h');
  });
});