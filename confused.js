var someObj = {
    propName: "Isaac"
  };

  function propPrefix(str) {
    var s = "prop";
    return s + str;
  }

  var someProp = propPrefix("Name");// someProp now holds the value 'propName'
  
  console.log(someObj[someProp]);