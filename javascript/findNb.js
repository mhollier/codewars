// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += (n ** 3);
  }
  return sum === m ? n : -1;
}

/////////////////////////////////////  TESTS  -  Run with: npx mocha findNb.js  ////////////
const { assert } = require('chai');

it("Basic tests",function() {
  assert.strictEqual(findNb(4183059834009), 2022)
  assert.strictEqual(findNb(24723578342962), -1)
  assert.strictEqual(findNb(135440716410000), 4824)
  assert.strictEqual(findNb(40539911473216), 3568)
})


