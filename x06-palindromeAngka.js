function angkaPalindrome(num) {
    var palindromCheck = false
    var nextNum = num + 1;
  
  
    while (palindromCheck === false) {
      var sisaMod = nextNum;
      var numTerbalik = 0;
  
      while (sisaMod > 0) {
        var satuan = Math.floor (sisaMod % 10);
        numTerbalik = numTerbalik * 10 + satuan;
        sisaMod = Math.floor(sisaMod/10);
      }
  
  
      if (nextNum != numTerbalik) {
        nextNum ++;
        palindromCheck = false;
      } else {
        return numTerbalik;
      }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001