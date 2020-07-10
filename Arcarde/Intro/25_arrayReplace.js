function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((item)=>{
        if(item === elemToReplace){
            return substitutionElem 
        }else{
            return item;
        }
    });
}
