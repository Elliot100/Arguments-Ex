class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {

    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

Function.prototype.myBind = function(...args) {
    console.log("in my bind");
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");

markov.says.myBind(pavlov, "meow", "Kush")();