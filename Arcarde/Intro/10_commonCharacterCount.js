function commonCharacterCount(s1,s2) {
  let a1 = s1.split('');
  let a2 = s2.split('');
  let counter = 0;

  for(let i=0; i < a1.length; i++){
    for(let j=0; j < a2.length; j++){
      if(a1[i] == a2[j] && a1[i] != undefined && a2[j] != undefined) {
            a1[i]=undefined;
            a2[j]=undefined;
            counter++;
        }
    }
  }
  return counter;
}
