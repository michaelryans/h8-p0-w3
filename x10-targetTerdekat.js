function targetTerdekat(arr) {
    // you can only write your code here!
    var index = 0;
    var oxCounter = 1;
    var xoCounter = 1;
    var temp = [];
  
    for (var i = 0; i < arr.length; i++) { //iterate on each '' in array
      if (arr[i] === 'o') {
        index = i;
        for (var j = i; j < arr.length; j++) {
        if (arr[j+1] === ' ') {
            oxCounter = oxCounter +1;
          } else if (arr[j+1] === 'x') {
            return oxCounter;
          } else {
            return 0;
          }
        } 
      }
  
  
    }
  
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  