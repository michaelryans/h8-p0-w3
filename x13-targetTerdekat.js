function targetTerdekat(arr) {
    // you can only write your code here!
    var index = 0;
    var oxCounter = 1;
    var xoCounter = 1;
    var temp = [];
  
    for (var i = 0; i < arr.length; i++) { //iterate on each '' in array
  
      if (arr[i] === 'o') { // finding o
        oxCounter = 1;
        for (var j = i; j < arr.length; j++) { //counter when finding 'x' and ' '
        if (arr[j+1] === ' ' || arr[j+1] === 'o') {
            oxCounter = oxCounter +1;
          } else if (arr[j+1] === 'x') {
            temp.push(oxCounter) //push the value of oxcounter
            oxCounter = oxCounter +1;
          } 
        }
      } else  if (arr[i] === 'x') { //find x
        xoCounter = 1;
        for (var k = i; k < arr.length; k++) {
        if (arr[k+1] === ' '|| arr[k+1] === 'x') {
            xoCounter = xoCounter +1;
          } else if (arr[k+1] === 'o') {
            temp.push(xoCounter); //push xoCounter
            xoCounter = xoCounter + 1;
          } 
        }
      }
  
    }
    //return temp;
    if (temp.length === 0) {
      return 0;
    } else {
  
  
    //bubble sort
      var counter = 1; //counter bubblesort
      var tempBubble = [];
      for (var n = 0; n < temp.length - 1; n++) {
        for (var m = 0; m < temp.length - counter; m++) {
          if (temp[m] > temp [m+1]) {
            tempBubble = temp[m];
            temp[m] = temp[m+1];
            temp[m+1] = tempBubble;
          }
        }
        counter++;
      }
      return temp[0];
    }
  
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  