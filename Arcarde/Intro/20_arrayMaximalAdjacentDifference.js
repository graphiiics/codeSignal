function arrayMaximalAdjacentDifference(inputArray) {
	let d = 0;
	inputArray.forEach((x1, i, arr) => {
		//console.log(arr[i+1]);
		//console.log(i);
		if(arr[i+1]){
			//console.log(x1+","+arr[i+1]);
			let temp = Math.sqrt(Math.pow((x1-arr[i+1]),2));
			//console.log("temp-->",temp);
			if(temp>d){
				d = temp
			}
			//console.log("d-->",d);
		}

	})
	return d
}
