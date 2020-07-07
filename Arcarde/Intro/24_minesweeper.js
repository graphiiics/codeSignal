function minesweeper(matrix) {
    let  length = matrix[0].length;
    let  width = matrix.length;
    const matrixOpen = [];
    //console.log(`Length ->${ length } width-> ${ width }`);
    for(let i = 0; i < width; i++ ){
        let temp = []
        for(let j = 0; j < length; j++ ){
            //console.log(`Center ----> (${ i }, ${ j }) = [${ matrix[i][j]}]`);    
            let mines = reviewAround(matrix, i, j, length, width);
            temp.push(mines);
        }
        matrixOpen.push(temp);
    }
    return matrixOpen;
    
    function reviewAround(matrix, x, y, length, width){
        let counter = 0;        
            for(let i = x-1; i <= x+1; i++ ){
                for(let j = y-1; j <= y+1; j++ ){
                    //console.log(`item... (${ i },${ j }) ->`);
                    if(i > -1 && j > -1 && i < width && j < length){
                        if(i == x && j == y){
                            //console.log('2_undefined');
                        }else{
                            //console.log(`[${ matrix[i][j]}]`);
                            if(matrix[i][j]){
                                counter++;
                            }
                        }
                    }
                }
            }
        return counter;
    }
}
