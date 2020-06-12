function matrixElementsSum(matrix) {
    var rest = 0;
    for(c=0; c<matrix[0].length; c++){
       for(f=0; f<matrix.length; f++){
         rest += matrix[f][c]; 
         if(matrix[f][c]==0){
           break;
         }
       }
    }
    return rest;
}
