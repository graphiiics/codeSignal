function adjacentElementsProduct(inputArray) {
    var res = -1000;
    var sum = 0;
    for(i=0; i<inputArray.length-1; i++){
        sum = inputArray[i]*inputArray[i+1];
        if(sum>res){
            res=sum;
        }
    }
    return res;
}
