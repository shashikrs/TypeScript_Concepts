//type aliases or custom types
type Combined = number | string;

function combine(input1: Combined, input2: Combined) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.toString() + input2.toString();
  } else {
    return new Error("Incompatible arguments provided");
  }
}

console.log(combine(5, 4));
console.log(combine("Hi", "M"));
console.log(combine(5, "M"));
