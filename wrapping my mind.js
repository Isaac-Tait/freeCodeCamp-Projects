// Lesson https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/assignment-with-a-returned-value
var changed = 0;

// the function "change" is defined as a number
function change(num) {
    // the number has five added to it then divided by three
  return (num + 5) / 3;
}
// the number in line 4 is defined as 10. 10 + 5 = 15. 15 / 3 is equal to 5. 
changed = change(10);

//Therefore the variable "changed" in line 1 is equal to 5.
console.log(changed);


//Call the processArg function with an argument of 7 and assign its return value to the variable processed.
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);