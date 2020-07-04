function avoidObstacles(inputArray) {
    let jump = 2;
    let items = 0;
    while(inputArray.length != items){
        //console.log('Entrado a while con jump->', jump);
        for (i = 0; i < inputArray.length; i++) {
            //console.log(` ${inputArray[i]} modulo ${jump} = ${inputArray[i]%jump}`);
            if( inputArray[i]%jump == 0 ){
                jump++;
                //console.log("Aumente la jump a:", jump);
                //debugger;
                break;
            }else{
                items++;
                //console.log("Aumente la item a:", items);
            }
        }

        //console.log(`this is ${inputArray.length} == ${items} the same`);
        if(inputArray.length == items){
            //console.log("YES");
            return jump;
        }
        //console.log("NO");
        items = 0;

    }

}
