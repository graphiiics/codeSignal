function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let me = [yourLeft, yourRight]
    let myFriend = [friendsLeft, friendsRight]

    let compare = me.map( arm => {
    	//console.log(arm);
    	return myFriend.includes(arm)
	})


    //console.log(compare);
    //console.log(me);
    return compare.every(arm =>  arm )
}
