function sortByHeight(a) {
    var trees = []; 
    var persons = [];
    
    a.map(function(x,i){
        if(x == -1){
          trees.push(i);
        }else{
          persons.push(x);
        }
    });
    
    persons.sort((a,b) => a - b );
    
    trees.map(x => persons.splice(x, 0, -1));
    
    return persons;
}
