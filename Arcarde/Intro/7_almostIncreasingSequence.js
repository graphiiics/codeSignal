function almostIncreasingSequence(serie) {
    var rest = true;
    var allow = 0; 
    //console.log("sss");
    for (i=0 ; i<serie.length; i++){
      //console.log(serie[i]);
      //console.log("i->"+serie[i]+" >= i+1->"+serie[i+1])
      if((serie[i]>=serie[i+1]) && (serie[i-1]>=serie[i+1])){
          //console.log("Quito--->"+serie[i+1]);
          allow++;
          i++;
          //console.log("i-1->"+serie[i-1]+" >= i+1->"+serie[i+1])
          if(serie[i-1]>=serie[i+1]){
              console.log("entro otra vez");
              allow++;
           } 
        }else if(serie[i]>=serie[i+1]){
          //console.log("Quito--->"+serie[i+1]);
          allow++;
          //console.log("i-1->"+serie[i-1]+" >= i+1->"+serie[i+1])
          if(serie[i-1]>=serie[i+1]){
              //console.log("entro otra vez");
              allow++;
           } 
        }
    }
    //console.log("allow->"+allow);
    if(allow>1){
      rest = false;
    }
    return rest;
}
