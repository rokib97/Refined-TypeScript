// STRING
let myName = "rokib"; // implicite declare or infer
// myName = 10; // you can't do it

// Just declare and assign later

let myNewName: string; // declare
myNewName = "rokibul Hasan"; //assign value

myName = "Hasan"; //reassign string value

let firstName: string = "Rokib"; //explicite declare
// firstName = 120  you can't do it
firstName = "rokibul"; // reassign value

// Number Type

let myValue: number;
// myValue = "new value" you can't do it
myValue = 69; // assign value
let value: number = 10;

// Boolean

let isHappy: boolean;
isHappy = true;

let isCute: boolean = false;

// any type  => you can asgin any type of value

let anyValue: any;

// anyValue = 10; // valid storing number
// or
// anyValue = "my String" // valid storing string

// anyValue = true; // valid storing boolean

// let newTypeValue: any = 10;  //valid

// let MyboolType: any = false; // its also valid

// Function Parameter
// if we don't explicitely tell what the type ts make it any
// and if we say that params its number then the function also will be that type and return that type value

// let sum = (a, b) => {
//   return a + b;
// };

// now the sum also being number type
// let sum = (a: number, b: number) => {
//   return a + b;
// };

// now the sum is being string  type, also return type is string
// let sum = (a: number, b: string) => {
//   return a + b;
// };
// console.log(sum(10, "name"));

// Union Type

let newType: number | string; //we can assign number or string now
newType = "rokib"; // abosulete fine
newType = 10; //abosulete fine
// console.log(newType);

// example
let postId: number | string;
let isActive: number | boolean;

// when in doubt check inference

let re = /\w+/g; // not sure so check the inference by mousehover to the variable

let myRegEx: RegExp = /\w+/g; //accurate now