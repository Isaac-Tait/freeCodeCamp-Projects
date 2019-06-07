function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined;
    } else {
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    }
    
    // Change values below to test your code
    console.log(abTest(12,2));