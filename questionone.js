const array = (arr) => {
  return [...new Set(arr)];
};
console.log(array([1, 3, 4, 2, 2, 3]));

class Animal {
  constructor(name) {
    this.name = name;
  }
  speack() {
    console.log(`speack ${this.name}`);
  }
  eat() {
    console.log("speack");
  }
}

class dog extends Animal {
  constructor(name = "dogggsss") {
    super(name);
  }
}

class cat extends Animal {
  constructor(name = "catttts") {
    super(name);
  }
}
let dogs = new Animal("dany");
let dogone = new dog();
let catone = new cat();
dogs.speack();
dogone.speack();
catone.speack();
