// gernerics in function

/* below function typescript wont know what is the returned object and the user cannot access any attributes on the object like .name
function mergeObjects(obj1: object, obj2: object) {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "sam" }, { age: 30 });

console.log(merged);
*/

/*solution - with below code typescript infers the type when we pass the arguments as the type are generic type T and U
 T and U are inferred separately instead of just a unknown object, so it is mandatory to specify different types
function mergeObjects<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "sam" }, { age: 30 });

console.log(merged);
console.log(merged.name);
*/

// above solution has a problem we can also pass a string as arguments and typescript will infer it as a a string lik
// const merged = mergeObjects({ name: "sam" }, 'qwerty'); but this is incorrect as we need an object always and we need to specify this
// so typescript can understand that we always need an object but could be any object
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "sam" }, { age: 30 });

console.log(merged);
console.log(merged.name);

//custom generic extension, with below we jsut say it has a length property and no need to specify string or array specifically
type TJustLength = {
  length: number;
};

function countAndDescribe<T extends TJustLength>(element: T) {
  let description = "Got no value.";
  if (element.length === 1) {
    description = "Got 1 element";
  } else if (element.length > 1) {
    description = "Got " + element.length + " elements";
  }
  return [element, description];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["sam", "dam"]));

//generics with keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "sam" }, "name"));

//classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return this.data;
  }
}

const d1 = new DataStorage<string>();
d1.addItem("sam");
d1.addItem("mam");
console.log(d1.getItems());
d1.removeItem("sam");
console.log(d1.getItems());

const d2 = new DataStorage<number>();
d2.addItem(10);
d2.addItem(20);
console.log(d2.getItems());
d2.removeItem(20);
console.log(d2.getItems());
