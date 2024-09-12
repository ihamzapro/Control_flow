const userEmail = "hamza.hk@gmail.com";
if (userEmail) {
  console.log("WE GOT USER EMAIL");
} else {
  console.log("EMAIL NOT FOUND");
}

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy value
// "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Arrys is empty")
// }
const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

console.log(val1);

// Terinary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80
  ? console.log("Value is less than 80")
  : console.log("Value is greater than 80");
