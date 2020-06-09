function allLongestStrings(inputArray) {
  var max = 0;
  var rest = [];
  for(i=0; i<inputArray.length; i++){
    //console.log(inputArray[i].length);
    if(inputArray[i].length>max){
      max=inputArray[i].length;
    }
  }
  for(i=0; i<inputArray.length; i++){
    //console.log(inputArray[i]);
    if(inputArray[i].length==max){
      rest.push(inputArray[i]);
    }
  }
  return rest;
}
