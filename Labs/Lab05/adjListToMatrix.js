//Name : Kamal Giri
//COSC 3020
//lab05
//Last Modified: 03/09/2023


function convertToAdjMatrix(adjList){
    //finding the length of the adjList or number of node
    const nodes = Object.keys(adjList).length;
    console.log(nodes);
    //Creating the emptymatrix
    const matrix = [];

    for(let r = 0; r< nodes; r++){
        matrix[r] = [];
        for(c = 0; c< nodes; c++){
            matrix[r][c] = 0;
        }
    }

    //creating the matrix
    //Converting the list to matrix

    for(var i = 0; i< nodes; i++){
        for (var j of adjList[i]){
            matrix[i][j] = 1;
        }
    }


    return matrix;

}

adjList = {0 : [1,3], 1 : [2], 2 : [], 3 : [2]};
console.log(convertToAdjMatrix(adjList));

//Testing

//test Function

function testFunction(tmatrix, aMatrix){
    
    for(var i= 0; i< tmatrix.length; i++){
        for(var j = 0; j< tmatrix[i].length; j++){
            //comparing each corresponding elements of the matrix
            if(!(tmatrix[i][j]== aMatrix[i][j]))
            {
                return false;
            }
            
        }
    }
    return true;
}

function print(test){
    if(test){
        console.log("Code is correct through Testing");
    }else{
        console.log("Code is incorrect in Testing");
    }


}

//Test1
console.log("Running Test 1");
adjList1 = {0 : [], 1: [0], 2: [1]};
let adjM1 = convertToAdjMatrix(adjList1);
const test1A = [[0,0,0], [1,0,0], [0,1,0]];
console.log("Actual Answer for Test 2:" );
console.log(test1A);
console.log("Result obtained from the code");
console.log(adjM1);
let test1 = testFunction(adjM1, test1A);
//Printing the result
print(test1);


//Test2
console.log("Running Test 2");

let adjList2 = {0:[1,2], 1: [], 2 : [3], 3 :[2,4], 4 : [0,3]};
let adjM2 = convertToAdjMatrix(adjList2);

const test2A = [[0,1,1,0,0], [0,0,0,0,0], [0,0,0,1,0], [0,0,1,0,1], [1,0,0,1,0]];
console.log("Actual Answer for Test 2:");
console.log(test2A);
console.log("Result obtained from the code");
console.log(adjM2);
let test2 = testFunction(adjM2, test2A);
//Printing the result
print(test2);


