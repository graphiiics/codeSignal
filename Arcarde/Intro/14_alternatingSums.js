function alternatingSums(a) {
    let team1 = 0;
	let team2 = 0;
	let teams = [];
	for(let i=0; i < a.length; i++){
		if(!(i%2)){
			team1 += a[i];
		}else{
			team2 += a[i];
		}
	}
	teams.push(team1);
	teams.push(team2);
	return teams;
}
