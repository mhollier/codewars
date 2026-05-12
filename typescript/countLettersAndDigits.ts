export const countLettersAndDigits = (input: string): number => {
  var lst = input.match(/[a-zA-Z0-9]+/g) ?? [];
  return lst.join('').length;
}

//////////// tsx countLettersAndDigits.ts ////////////
console.log(countLettersAndDigits(''));
console.log(countLettersAndDigits('hel2!lo'));
console.log(countLettersAndDigits('n!!ice!!123'));

/////////// npx mocha countLettersAndDigits.ts ///////////
import { assert } from "chai";
import 'mocha';

describe("Fixed tests", function() {
  it("Should count correctly", function() {
    assert.equal(countLettersAndDigits("hel2!lo"), 6);
    assert.equal(countLettersAndDigits("n!!ice!!123"), 7);
    assert.equal(countLettersAndDigits("1"), 1);
    assert.equal(countLettersAndDigits("?"), 0);
    assert.equal(countLettersAndDigits("12345f%%%t5t&/6"), 10);
    assert.equal(countLettersAndDigits("aBcDeFg090"), 10);
    assert.equal(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);
  });
});