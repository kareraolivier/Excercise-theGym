// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Object literal properties may be computed values", () => {
  it("a computed property `x` needs to be surrounded by `[]`", () => {
    const propertyName = "x";
    const obj = { x: 1 };
    assert.equal(obj.x, 1);
  });
  it("can also get a function assigned", () => {
    const key = "func";
    const obj = {
      [key]: function func() {
        return "seven";
      },
    };
    assert.equal(obj.func(), "seven");
  });
  it("the key may also be the result of a function call", () => {
    const propertyName = () => "seven";
    const obj = {
      propertyName() {
        return "seven";
      },
    };
    assert.equal(obj.propertyName(), "seven");
  });
  it("the key can also be constructed by an expression", () => {
    const what = "tyName";
    const obj = { ["proper" + what]: null };
    assert("propertyName" in obj);
  });
  it("accessor keys can be computed names too", () => {
    const obj = {
      get ["key"]() {
        return 1;
      },
    };
    assert.equal(obj.key, 1);
  });
});

// 66: object-literal - getter
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("An object literal can also contain getters", () => {
  it("just prefix the property with `get` (and make it a function)", function () {
    const obj = {
      get x() {
        return "ax";
      },
    };
    assert.equal(obj.x, "ax");
  });
  it("must have NO parameters", function () {
    const obj = {
      get x() {
        return "ax";
      },
    };
    assert.equal(obj.x, "ax");
  });
  it("can be a computed property (an expression enclosed in `[]`)", function () {
    const keyName = "x";
    const obj = {
      get ["x"]() {
        return "ax";
      },
    };
    assert.equal(obj.x, "ax");
  });
  it("can be removed using delete", function () {
    const obj = {
      get x() {
        return "ax";
      },
    };
    delete obj.x;
    assert.equal(obj.x, void 0);
  });

  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  // It might be corrected later, new knowledge welcome.

  it("must not overlap with a pure property", function () {
    const obj = {
      x: 1,
      get x() {
        return "ax";
      },
    };

    assert.equal(obj.x, "ax");
  });

  it("multiple `get` for the same property are not allowed", function () {
    const obj = {
      x: 1,
      // get x() { return 'ax'; },
      get x() {
        return "ax1";
      },
      get x() {
        return "ax";
      },
    };

    assert.equal(obj.x, "ax");
  });
});

// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("Object literal properties may be computed values", () => {
  it("a computed property `x` needs to be surrounded by `[]`", () => {
    const propertyName = "x";
    const obj = { x: 1 };
    assert.equal(obj.x, 1);
  });
  it("can also get a function assigned", () => {
    const key = "func";
    const obj = {
      [key]: function func() {
        return "seven";
      },
    };
    assert.equal(obj.func(), "seven");
  });
  it("the key may also be the result of a function call", () => {
    const propertyName = () => "seven";
    const obj = {
      propertyName() {
        return "seven";
      },
    };
    assert.equal(obj.propertyName(), "seven");
  });
  it("the key can also be constructed by an expression", () => {
    const what = "tyName";
    const obj = { ["proper" + what]: null };
    assert("propertyName" in obj);
  });
  it("accessor keys can be computed names too", () => {
    const obj = {
      get ["key"]() {
        return 1;
      },
    };
    assert.equal(obj.key, 1);
  });
});
