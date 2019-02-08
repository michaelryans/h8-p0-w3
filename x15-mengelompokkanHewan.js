function groupAnimals(animals) {
    //you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var storeAlphabet = [];
    var output = [];
  
    for (var i = 0; i < abjad.length; i++) { //iterate on alphabet (26 times)
      for (var j = 0; j < animals.length; j++) { //iterate on animals.length
        if (abjad[i] == animals[j][0]) {
          storeAlphabet.push(animals[j])
          //output.push(storeAlphabet);
        }
      }
  
      //push only if array is not null
      if (storeAlphabet.length !== 0) {
        output.push(storeAlphabet)
      }
      
      //empty the array for temporary storing
      storeAlphabet = [];
    } 
    return output;
  
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]