function isLucky(n) {

  var cadena = n.toString();
  var half1=0;
  var half2=0;

  for(i=0; i<n.toString().length/2; i++){
    //console.log(cadena[i]);
    half1 +=  parseInt(cadena[i]);
  }

  for(j=n.toString().length/2; j<n.toString().length; j++){
    //console.log(cadena[j]);
    half2 +=  parseInt(cadena[j]);
  }
  //console.log(half1+" vs "+half2);
  if(half1==half2){
    return true;
  }else{
    return false;
  }
  //(half1==half2) ? return true : return false;
  
}
