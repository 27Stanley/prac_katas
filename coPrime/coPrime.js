const isCoPrime = (num1, num2) => {
  let largerNum = null;
  let smallerNum = null;

  if (num1 === num2) {
    console.log("they are the same number");
    return false;
  }

  if (num1 % 2 === 0 && num2 % 2 === 0) {
    console.log("they are both even numbers");
    return false;
  }

  // identify larger number
  if (num1 - num2 >= 0) {
    largerNum = num1;
    smallerNum = num2;
    console.log(
      `larger number is ${largerNum}, smaller number is ${smallerNum}`
    );
  } else {
    largerNum = num2;
    smallerNum = num1;
    console.log(
      `larger number is ${largerNum}, smaller number is ${smallerNum}`
    );
  }

  if (largerNum % smallerNum === 0) {
    console.log("not co prime, can be divided by each other");
    return false;
  }

  for (let i = 3; i + 2; i < smallerNum) {
    if
  }
};

module.exports = isCoPrime;

isCoPrime(34, 4);
// console.log(isCoPrime(33, 3));

//co prime number pairs dont have the same numbers that are divisable except for itself and 1.

/*
divide larger number by smaller number
--this checks for all paired even numbers but not all odd numbers

return false if divisable

on true, take smaller number and initiate for loop (or recursive function)
since the first loop has already checked for even number pairs 
loop starts at 3 as the first if statement checks for even numbers, % smaller number by loop num, if 1, % with larger num
if % of larger num is also 1, loop until loop num is same as smaller num

if % is 0 at any point, return false

return true if % results are all 1 and loop num is === smaller num

*/
