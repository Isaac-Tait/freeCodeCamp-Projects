//Setup
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions

function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined;
    } else {
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    }
    
    // Change values below to test your code
    console.log(abTest(122,100));

    // I figured this out on my own from the following instructions:
    // Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.