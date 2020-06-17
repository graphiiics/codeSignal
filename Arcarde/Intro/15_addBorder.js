function addBorder(picture) {
    let marco = [];
	let char = "*";
	//console.log(char.repeat((picture[0].length+2)));
	marco[0] = char.repeat((picture[0].length+2));
	for(let i=0; i < picture.length; i++){
		let row = char + picture[i] + char;
		//console.log(row);
		marco.push(row);
	}
	marco.push(char.repeat((picture[0].length+2)));
	//console.log(marco);
	return marco;
}
