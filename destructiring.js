// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Destructuring arrays makes shorter code", () => {
  it("extract value from array, e.g. extract 0 into x like so `let [x] = [0];`", () => {
    let [firstValue] = [1];
    assert.strictEqual(firstValue, 1);
  });
  it("get the last item from array", () => {
    let [, , lastValue] = [1, 2, 3];
    assert.strictEqual(lastValue, 3);
  });
  it("swap two variables, in one operation", () => {
    let [x, y] = ["ax", "why"];
    [x, y] = [y, x];
    assert.deepEqual([x, y], ["why", "ax"]);
  });
  it("leading commas", () => {
    const all = ["ax", "why", "zet"];
    const [, , z] = all;
    assert.equal(z, "zet");
  });
  it("extract from nested arrays", () => {
    const user = [["Some", "One"], 23];
    const [name, age] = user;
    const expected = "Some One = 23 years";
    assert.equal(`${name[0]} ${name[1]} = ${age} years`, expected);
  });
  it("chained assignments", () => {
    let c, d;
    let [a, b] = ([c, d] = [1, 2]);
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
  });
  it("in for-of loop", () => {
    for (var [, a, b] of [[0, 1, 2]]) {
    }
    assert.deepEqual([a, b], [1, 2]);
  });
});

// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Destructure objects", () => {
  it("by surrounding the left-hand variable with `{}`", () => {
    const { x } = { x: 1 };
    assert.equal(x, 1);
  });
  describe("nested", () => {
    it("multiple objects", () => {
      const magic = { first: 23, second: 42 };
      const { _, second } = magic;
      assert.equal(second, 42);
    });
    it("object and array", () => {
      const {
        z: [, x],
      } = { z: [23, 42] };
      assert.equal(x, 42);
    });
    it("array and object", () => {
      const [, [{ lang }]] = [null, [{ env: "browser", lang: "ES6" }]];
      assert.equal(lang, "ES6");
    });
  });
  describe("interesting", () => {
    it("missing refs become undefined", () => {
      const { z } = { x: 1, y: 2 };
      assert.equal(z, void 0);
    });
    it("destructure from builtins (string)", () => {
      const { substr } = "1";
      assert.equal(substr, String.prototype.substr);
    });
  });
});

// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Destructuring also works on strings", () => {
  it("destructure every character, just as if the string was an array", () => {
    let [a, b, c] = "abc";
    assert.deepEqual([a, b, c], ["a", "b", "c"]);
  });
  it("missing characters are undefined", () => {
    const [a, , c] = "ab";
    assert.equal(c, void 0);
  });
  it("unicode character work too", () => {
    const [space, , coffee] = "a ☕";
    assert.equal(coffee, "\u{2615}");
  });
});

// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("When destructuring you can also provide default values", () => {
  it("just assign a default value, like so `a=1`", () => {
    const [a = 1] = [];
    assert.equal(a, 1);
  });
  it("for a missing value", () => {
    const [, b = 2] = [1, , 3];
    assert.equal(b, 2);
  });
  it("in an object", () => {
    const { a, b = 2 } = { a: 1 };
    assert.equal(b, 2);
  });
  it("if the value is undefined", () => {
    const { a, b = 2 } = { a: 1, b: void 0 };
    assert.strictEqual(b, 2);
  });
  it("also a string works with defaults", () => {
    const [a, b = 2] = "1";
    assert.equal(a, "1");
    assert.equal(b, 2);
  });
});

// 15: destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Assign object property values to new variables while destructuring", () => {
  describe("for simple objects", function () {
    it("use a colon after the property name, like so `propertyName: newName`", () => {
      const { x: y } = { x: 1 };
      assert.equal(y, 1);
    });
    it("assign a new name and give it a default value using `= <default value>`", () => {
      const { x: y = 42 } = { y: 23 };
      assert.equal(y, 42);
    });
  });
  describe("for function parameter names", function () {
    it("do it the same way, with a colon behind it", () => {
      const fn = ({ x: y }) => {
        assert.equal(y, 1);
      };
      fn({ x: 1 });
    });
    it("giving it a default value is possible too, like above", () => {
      const fn = ({ x: y = 3 }) => {
        assert.equal(y, 3);
      };
      fn({});
    });
  });
});

// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("The object literal allows for new shorthands", () => {
  const x = 1;
  const y = 2;
  describe("with variables", () => {
    it("the short version for `{x: x}` is {x}", () => {
      const short = { y: y };
      assert.deepEqual(short, { y: y });
    });
    it("works with multiple variables too", () => {
      const short = { x, y: y };
      assert.deepEqual(short, { x: x, y: y });
    });
  });
  describe("with methods", () => {
    const func = () => func;
    it("using the name only uses it as key", () => {
      const short = { func: func };
      assert.deepEqual(short, { func: func });
    });
    it("a different key must be given explicitly, just like before ES6", () => {
      const short = { otherKey: func };
      assert.deepEqual(short, { otherKey: func });
    });
    it("inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`", () => {
      const short = {
        inlineFunc: function () {
          return "I am inline";
        },
      };
      assert.deepEqual(short.inlineFunc(), "I am inline");
    });
  });
});

// 20: spread - with-arrays
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Spread syntax with arrays", () => {
  describe("basically", () => {
    it("expands the items of an array by prefixing it with `...`", function () {
      const middle = [1, 2, 3];
      const arr = [0, ...middle, 4];
      assert.deepEqual(arr, [0, 1, 2, 3, 4]);
    });
    it("an empty array expanded is no item", function () {
      const arr = [0, ...[], 1];
      assert.deepEqual(arr, [0, 1]);
    });
  });
  describe("is (in a way) the opposite to the rest syntax", function () {
    it("both use `...` to either expand all items and collect them", function () {
      const [...rest] = [...[1, 2, 3, 4, 5]];
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
    it("rest syntax must be last in an array, spread can be used in any place", function () {
      const [a, b, ...rest] = [1, [2], 3, 4, 5];
      assert.equal(a, 1);
      assert.equal(b, 2);
      assert.deepEqual(rest, [3, 4, 5]);
    });
  });
  describe("used as function parameter", () => {
    it("prefix with `...` to spread as function params", function () {
      const magicNumbers = [1, 2];
      const fn = (magicA, magicB) => {
        assert.deepEqual(magicA, magicNumbers[0]);
        assert.deepEqual(magicB, magicNumbers[1]);
      };
      fn(...magicNumbers);
    });
    it("pass an array of numbers to Math.max()", function () {
      const max = Math.max(...[23, 0, 42, 40]);
      assert.equal(max, 42);
    });
  });
  describe("used as constructor parameter", () => {
    it("just like in a function call (is not possible using `apply`)", () => {
      class X {
        constructor(a, b, c) {
          return [a, b, c];
        }
      }
      const args = [1, 2, 3];
      assert.deepEqual(new X(...args), [1, 2, 3]);
    });
  });
});

// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Spread syntax with strings", () => {
  it("expands each character of a string by prefixing it with `...`", function () {
    const [a, b] = [..."ab"];
    assert.equal(a, "a");
    assert.equal(b, "b");
  });
  it("expands any kind of character", function () {
    const arr = [..."1 ☢ 2"];
    assert.deepEqual(arr, ["1", " ", "☢", " ", "2"]);
  });
  it("works anywhere inside an array (must not be last)", function () {
    const letters = ["a", "b", "c", "d", "e", "f"];
    assert.equal(letters.length, 6);
  });
  it("don`t confuse with the rest operator", function () {
    const [...rest] = [..."12345"];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });
  it("can also be used as function parameter", function () {
    const max = Math.max(..."12345");
    assert.deepEqual(max, 5);
  });
});
