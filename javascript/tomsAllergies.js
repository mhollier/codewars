function Allergies(score) {
  if (Number.isInteger(score) === false) {
    throw new Error("Score must be an integer");
  }

  this.score = score;
  this.ALLERGY_SCORES = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };
}

Allergies.prototype.isAllergicTo = function (allergen) {
  if ((this.score % 256) & this.ALLERGY_SCORES[allergen]) {
    return true;
  }
  return false;
};

Allergies.prototype.allergies = function () {
  let result = [];
  for (key in this.ALLERGY_SCORES) {
    if (this.isAllergicTo(key)) {
      result.push(key);
    }
  }
  return result.sort();
};


/////////////////////////////////////  TESTS  -  Run with: npx mocha tests.js  ////////////

const { assert } = require('chai')

describe("Basic tests",() => {
  
  it("No allergies", function() {  
    let allergies = new Allergies(0);
    assert.strictEqual(allergies.isAllergicTo("peanuts"), false);
    assert.strictEqual(allergies.isAllergicTo("cats"), false);
    assert.strictEqual(allergies.isAllergicTo("strawberries"), false);
    assert.strictEqual(new Allergies(1).isAllergicTo("eggs"), true);
  });
     
     
  it("Allergic to eggs and shellfish", function() {
    let allergies = new Allergies(5);
    assert.strictEqual(allergies.isAllergicTo("eggs"), true);
    assert.strictEqual(allergies.isAllergicTo("shellfish"), true);
    assert.strictEqual(allergies.isAllergicTo("strawberries"), false);
  });
  
  it("List allergies", function() {
    assert.deepEqual(new Allergies(0).allergies(), []);
    assert.deepEqual(new Allergies(2).allergies(), ["peanuts"]);
    assert.deepEqual(new Allergies(255).allergies(),["cats", "chocolate", "eggs", "peanuts", "pollen", "shellfish", "strawberries", "tomatoes"]);
    assert.deepEqual(new Allergies(257).allergies(), ["eggs"]);
    assert.deepEqual(new Allergies(256).allergies(), []);
    assert.deepEqual(new Allergies(257).allergies(), ["eggs"]);
    assert.deepEqual(new Allergies(258).allergies(), ["peanuts"]);
    assert.deepEqual(new Allergies(259).allergies(), ["eggs", "peanuts"]);
    assert.deepEqual(new Allergies(260).allergies(), ["shellfish"]);
    assert.deepEqual(new Allergies(1000).allergies(), ["cats", "chocolate", "pollen", "strawberries"]);
  });
  
  it("Invalid", function() {
    assert.throws(_=>new Allergies(""));
    assert.throws(_=>new Allergies(5.2));
    assert.throws(_=>new Allergies(null));
  });
})