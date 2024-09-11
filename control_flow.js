// const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);   // This code will not run because of scope

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedFromEmail) {
  console.log("User Logged In");
}
