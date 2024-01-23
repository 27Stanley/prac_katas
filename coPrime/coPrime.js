const isCoPrime = (num1, num2) => {};

module.exports = isCoPrime;

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
