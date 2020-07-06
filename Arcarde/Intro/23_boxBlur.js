function boxBlur(image) {
    let  length = image[0].length;
    let  width = image.length;
    let result = [];
    //console.log(`length: ${ length }, width ${ width } `);
    for(let i = 1; i < width-1; i++ ){
        let temp = []
        for(let j = 1; j < length-1; j++ ){
            //console.log(`(${ i }, ${ j }) = [${ image[i][j]}]`);    
            temp.push(parseInt(reviewAround(image, i, j).toString().split('.')[0]));
            //console.log(`Temp -> [${ temp }]`);
        }
        result.push(temp);
        //console.log(`Result -> [${ result }]`);
    }
    
    function reviewAround(matriz, x, y){
        let suma = 0;
        //console.log(`Checking... position: x: ${ x }, y: ${ y }  of [${ matriz[x][y]}]`);
        for(let i = x-1; i <= x+1; i++ ){
            for(let j = y-1; j <= y+1; j++ ){
                //console.log(`Add... (${ i },${ j }) -> [${ matriz[i][j]}]`);
                suma +=  matriz[i][j];
            }
        }
        //console.log("suma: ", suma);
        return suma/9;
    }
    return result;

}
