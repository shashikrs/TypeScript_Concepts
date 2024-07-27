type TAdmin = {
  name: string;
  privileges: string[];
};

type TEmployee = {
  name: string;
  startDate: Date;
};

type TElevatedEmployee = TAdmin & TEmployee; // intersection type

const e1: TElevatedEmployee = {
  name: "Dux",
  privileges: ["create-server"],
  startDate: new Date(),
};

type TCombinable = string | number; // union type
type TNumeric = number | boolean;

type TUniversal = TCombinable & TNumeric;

//type guards

type TUnknownEmployee = TAdmin | TEmployee;

function printEmpInfo(emp: TUnknownEmployee) {
  console.log(emp.name);

  if ("privileges" in emp) {
    // type guard
    console.log(emp.privileges);
  }

  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

printEmpInfo(e1);

// type guards in classes
class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving");
  }

  loadCargo(amount: number) {
    console.log("Loading" + amount);
  }
}

type TWagon = Car | Truck;

const w1 = new Car();
const w2 = new Truck();

function useWagon(w: TWagon) {
  w.drive();
  if (w instanceof Truck) {
    w.loadCargo(10);
  }
}

useWagon(w1);
useWagon(w2);

// discriminated unions

interface IBird {
  type: "bird";
  flyingSpeed: number;
}

interface IHorse {
  type: "horse";
  runningSpeed: number;
}

type TAnimal = IBird | IHorse;

function moveAnimal(animal: TAnimal) {
  let speed;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(speed);
  return speed;
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting (two ways)
const inputExample1 = <HTMLInputElement>document.getElementById("user-input")!;
const inputExample2 = document.getElementById("user-input");

if (inputExample1) {
  inputExample1.value = "Hi example 1";
}

if (inputExample2) {
  (inputExample2 as HTMLInputElement).value = "Hi example 2";
}

// index types
interface IErrorContainer {
  [prop: string]: string; //index type
}

const errors: IErrorContainer = {
  email: "Email not valid",
  userName: "User name not valid",
};

//function overloads
function addition(a: string, b: string): string;
function addition(a: number, b: number): number;
function addition(a: Combined, b: Combined) {
  if (typeof a === "string" && typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return +a + +b;
  }
}

const add1 = addition("S", "T");
const add2 = addition(1, 2);

//optional chaining

const userData = {
  id: 12,
  name: "X",
  job: { title: "CEO", description: "My Own Company" },
};

console.log(userData?.job?.title);

//null coalescing
const userInput1 = null;

const data = userInput1 ?? "DEFAULT";

console.log(data);
