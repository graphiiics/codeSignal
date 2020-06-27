function arrayChange(inputArray) {
    let moves = 0;
	for(let i=0; i < inputArray.length; i++){
		while(inputArray[i+1] <= inputArray[i]){
			inputArray[i+1] += 1; 
			moves++;
		}
		//console.log(inputArray);
	}
	return moves;
}
