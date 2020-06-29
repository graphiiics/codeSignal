function palindromeRearranging(inputString) {
    let odd = 0;
	let even = 0;
	let arr = inputString.split('');
	//console.log(arr);
	var myMap = new Map();
	for(let i = 0; i < arr.length; i++){
		if(myMap.has(arr[i])){
			//Increase the value +1
			myMap.set(arr[i],myMap.get(arr[i])+1);
		}else{
			//Create the key-value and set 1 on value
			myMap.set(arr[i], 1);
		}
	}
	//console.log(myMap);
	//console.log(odd);
	//console.log(even);
	myMap.forEach(value => {
		//console.log(value);
		if(value % 2){
			odd++;
		}else{
			even++;
		}
	});
	//console.log("odd:"+odd);
	//console.log("even:"+even);

	return odd > 1 ? false : true;
}
