interface INamed {
  name: string;
  outputName?: string;
}

interface IGreetable extends INamed {
  greet(phrase: string): void;
}

let user1: IGreetable;

user1 = {
  name: "Dam",
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("Hi");

class Person implements IGreetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

const newPerson = new Person("Sam");

newPerson.greet("Hi there");
