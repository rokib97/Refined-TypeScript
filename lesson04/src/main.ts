// Array type Inference
let firstArr = ["rokib", "sakib", "hasan"]; // string type
let secondArr = ["rokib", "sakib", 1050]; // any type
let thirdArr = ["rokib", 100, true]; // any type

// Array Assignments
// firstArr[0] = 10 // can't because it accepts only string
firstArr[0] = "tania"; //its okay
firstArr.push("tani"); // on;y accepts string type data

secondArr[0] = "new string"; //accepts becuse its union type
secondArr.push(100); // also accepts because its accpets string | number
// secondArr.push(false) // not accepting

thirdArr.push(true); // its accept because inside the array there are three type string , number , and boolean
thirdArr.unshift("David");
thirdArr.push(500);

// firstArr = secondArr // not possible becuase first array expecting all string where second array does have string and number

secondArr = firstArr; // accepted because first array except string or number , which second araay have which is string

thirdArr = firstArr; // ok
thirdArr = secondArr; // ok

// secondArr = thirdArr //not okay becuse third array have boolean but second array only accept string or number

// Empty arrya is any type

let MyArr = []; //any type
MyArr.push(100);
MyArr.push("Hello");
MyArr.push(true);

let NewArrAgain: string[] = []; //explicit assignment
NewArrAgain.push("Dina"); // accept
// NewArrAgain.push(100); // not accept

// Tupples in TypeScript
// fixed length and fixed the value
// here inside the typle i am telling that only string , number and boolean accpets also the order matters
let myTuple: [string, number, boolean] = ["rokib", 100, true];

myTuple[0] = "hasan"; // accepted
// myTuple[0] = 1000; // not accepted its expecting string

myTuple.push(10); //accepted
myTuple.unshift("name"); //accepted

let mixed = ["hasan", 500, false]; // union type
mixed = myTuple; //accepts becuse  length is equal and mixed expecting string number or boolean which present in the Tuple

let anotherMixed = [true, 100, "name", undefined, null]; // the order default string | number | boolean | null | undefied
anotherMixed = myTuple; // its also acceptable

let myAnotherTuple: [number, boolean, string] = [1000, true, "rakib"];
anotherMixed = myAnotherTuple; // also accepted

// union doesn't maintain the element data type  order but Tuples does
// myAnotherTuple = anotherMixed // not accepted

// OBJECT Type

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = secondArr;
myObj = myTuple;
myObj = {};

const myExampleObj = {
  name: "rokib",
  age: 25,
  isActive: true,
};

// myExampleObj.name = 100 // not accepted its expecting string
myExampleObj.name = "hasan"; // its fine
myExampleObj.isActive = false; // accepted as its boolean data

// Object TYpe Annotation

// inline type annotation
const newObj: {
  name: string;
  age: number;
  isHandsome: false;
} = {
  name: "rokib",
  age: 25,
  isHandsome: false,
};

// Type Alias
type Person = {
  name: string;
  age?: number;
  isActive: boolean;
  monthYear: (string | number)[];
};

const person: Person = {
  name: "rokib",
  isActive: true,
  monthYear: [1998, "December"],
};

let person2: Person = {
  name: "hasan",
  age: 26,
  isActive: false,
  monthYear: [1998, "December"],
};

const person3: Person = {
  name: "roqkeib",
  age: 27,
  isActive: true,
  monthYear: ["January", "December"],
};

person2 = person3; // accepted but however if we don't provide the type Person in the person3 object it won't accept the assignment

// Optional Object Peroperties

// type Coder = {
//   name: string;
//   age?: number;
//   isPro: boolean;
// };
// we can make interface too its works the same way
interface Coder {
  name?: string;
  age: number;
  isPro: boolean;
}

let Rahim: Coder = {
  name: "Rahim",
  age: 25,
  isPro: false,
};
// we can also remove the age as its optional . (number | undefined) type data
// no issue running this code
let Karim: Coder = {
  age: 26,
  isPro: false,
};

// object type inside function
function greetCoder(name: Coder) {
  // using optional
  //   return `Hello ${name.name?.toUpperCase()}!`;
  // or doing narrowing
  if (name.name) {
    return `Hello ${name.name.toUpperCase()}!`;
  } else {
    return "Hello!";
  }
}
// console.log(greetCoder(Karim));

// Enums

enum Color {
  RED = 1,
  GREEN = 2,
  BLUE = 3,
}

let favColor: Color = Color.RED;
// console.log(Color["RED"]);
// console.log(Color);

//
// more on type alias

type StringOrNumber = number | string;

type StringOrNumberArray = (string | number)[];

type Guiterist = {
  name: StringOrNumber;
  active: boolean;
  // album: (string | number)[];
  album: StringOrNumberArray;
};

let perSon: Guiterist = {
  name: 10,
  active: true,
  album: ["new", 10, "more"],
};

// Literal Types
let myName: "rokib";
// myName = "rokib";
let userName: "Dave" | "John" | "Rokib";
userName = "Rokib";

// functions
// basic fucntion
function addTwoNum(a: number, b: number): number {
  return a + b;
}

// function without return
const msgHello = (msg: any): void => {
  console.log(msg);
};

msgHello("Hello!");
msgHello(addTwoNum(5, 7));

// function keyword
let subs = function (c: number, d: number): number {
  return c - d;
};

// function type aliases
type mathFunction = (a: number, b: number) => number;

// alternative but we should use only in the class syntax
// interface mathFunction {
//   (a: number, b: number): number;
// }

let myFun: mathFunction = (a, b) => a * b;
const myFun2: mathFunction = function (a, b) {
  return a * b;
};

// optional prameters
let addAll = (a: number, b: number, c?: number): number => {
  // type guard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default Parameter
let sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};
sumAll(10, 2);
sumAll(undefined, 10);

// rest params
let total = (a: number, ...nums: number[]): number => {
  return nums.reduce((pre, next) => pre + next);
};

console.log(total(1, 2, 3, 4, 10));

// never type

const createError = (msg: string): never => {
  throw new Error(msg);
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("Something Went Wrong");
};
