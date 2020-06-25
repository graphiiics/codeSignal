//My solution doesn't %"#"%$ work for time! 
/*function areSimilar(a, b) {
   let similar = 0;
	let changes = 0;
	for(let i = 0; i < a.length; i++){
		for(let j = 0; j < b.length; j++){
			if(a[i] == b[j] && i == j){
				similar++;
			}else if(a[i] == b[j] && (i != j)){
				changes++;
			}
		}
	}
	return (a.length == similar || changes == 2 );
}*/
function areSimilar(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}
