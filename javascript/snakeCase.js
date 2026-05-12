// Take a PascalCase string and return the string in snake_case notation.
// Lowercase characters can be numbers.
// If the method gets a number as input, it should return a string.
// https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript
function toUnderscore(input) {
  let inputString = new String(input);
  let responseText = '';
  let regex = new RegExp(/[A-Z]/);
  for (let i = 0; i < inputString.length; i++) {
    let currentChar = inputString.charAt(i);
    if (i > 0 && regex.test(currentChar)) {
      responseText += '_';
    }
    responseText += currentChar.toLowerCase();
  }
  return responseText;
}

console.log(toUnderscore("TestController"));

/////////////////////  TESTS  -  Run with: npx mocha snakeCase.js  ////////////

describe("Tests", () => {
  const chai = require("chai"),
    { assert } = chai;
  chai.config.truncateThreshold = 0;

  function doTest(input, expected) {
    const message = `for input ${JSON.stringify(input)}\n`;
    const actual = toUnderscore(input);
    assert.strictEqual(actual, expected, message);
  }

  it("sample tests", () => {
    doTest("A123aaa123AAA123", "a123aaa123_a_a_a123");
    doTest("AAA", "a_a_a");
    doTest("TestController", "test_controller");
    doTest("ThisIsBeautifulDay", "this_is_beautiful_day");
    doTest("Am7Days", "am7_days", "Am7Days should equals am7_days");
    doTest("My3CodeIs4TimesBetter", "my3_code_is4_times_better");
    doTest(5, "5");
  });
});
