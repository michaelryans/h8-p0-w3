function pasanganTerbesar(num) {
    // you can only write your code here!
    var stringNum ='';
    var savePair = '';
    var pairArray = [];
    var numPairArray = 0;
  
    stringNum = num.toString();
  
    //loop untuk membuat pair (assigned ke savePair) dan push savePair ke dalam pairArray
    for (var i = 0; i < stringNum.length - 1; i++) {
      savePair = stringNum[i] + stringNum[i+1];
      pairArray.push(savePair);
    }
  
    //sorting array dari value terbesar
    //pairArray.sort(function(a,b) {return a < b});
  
    var counterBubble = 1;
    var temp = [];
  
    for (var j = 0; j < pairArray.length - 1; j++) {
      for (var k = 0; k < pairArray.length - counterBubble; k ++) {
        if (pairArray[k] < pairArray[k+1]) {
          temp = pairArray[k];
          pairArray[k]=pairArray[k+1];
          pairArray[k+1] = temp;
        }
      }
      counterBubble++;
    }
  
  
  
  
    //return nilai paling kiri dalam array
  
  
    
    return Number(pairArray[0]);
    
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99