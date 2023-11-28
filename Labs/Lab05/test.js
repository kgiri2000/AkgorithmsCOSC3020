function testFunction(tmatrix, aMatrix){
    console.log("Length");
    console.log(tmatrix.length);
    console.log(aMatrix.length);
    console.log(tmatrix);
    for(var i= 0; i< tmatrix.length; i++){
        for(var j = 0; j< tmatrix[i].length; j++){
            if(!(tmatrix[i][j]== aMatrix[i][j]))
            {
                return false;
            }
        }

    }
    return true;
}

const a = [[0,0], [1, 0]];
const b = [[1,0], [1,0]];


let r = testFunction(a, b);
if(r){
    console.log("True");
}else{
    console.log("false");
}
