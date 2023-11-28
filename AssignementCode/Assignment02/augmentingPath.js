//Kamal Giri
//COSC 3020
//Assignment 2
//Last Modified : 31 March 2023
//Help: From lab06

//function to call the actual augmentingPathDFS
function augmentingPath(graph, start, end){

    //To store the visited nodes
    let visited = {};
    return augmentingPathDFS(graph,start, end, visited);
}

function augmentingPathDFS(graph, start, end, visited){
    visited[start] =  true;

    if(start ==  end){
        return [end];
    }
    //Using Depth First Search
    for (const key of Object.keys(graph[start])){
        if(!visited[key]){
           let path = augmentingPathDFS(graph, key, end, visited);


        if(path.length > 0){
            path.unshift(start);
            return path;
        }
    }
}

return [];
}

var graph1 = {
    'foo': {'boo': 7},
    'boo': {'foo': 3, 'bar': 2},
    'bar': {'boo': 4}
  };
 
  
  const aPath1 = augmentingPath(graph1,'foo', 'bar');
  console.log("The output for graph1 is: ");
  console.log(aPath1)


//Running with another example
console.log("Running on  example 2: ")
var graph2 = {
        'foo' : {'boo' : 7}, 
        'boo': {'foo':3, 'bar':2}, 
        'bar': {'boo': 4, 'hoo' : 8},
        'hoo': {'bar': 9}
        };

const aPath2 = augmentingPath(graph2, 'foo', 'hoo');
console.log("The output for graph2 is: ");
console.log(aPath2)

//Running with another example:
console.log("Running on  example 3: ");

const graph3 = {
    'A': {'B': 5, 'C': 7},
    'B': {'C': 1, 'D': 2},
    'C': {'D': 4},
    'D': {'E': 3},
    'E': {'F': 2},
    'F': {}
  };

  const aPath3 = augmentingPath(graph3, 'A', 'F');
  console.log("The output for graph3 is: ");
  console.log(aPath3)
  
  


//Testing

console.log("Doing Testing");

function testingFunction(arr1, arr2){
    for(var i = 0; i< arr1.length; i++ ){
        if(arr1[i]!=arr2[i])
        {
            return false;
        }
    }
    return true;
}
function printResult(t_f){
    if(t_f){
        console.log("The code is working correctly");
    }else{
        console.log("The cide is not working correctly");
    }
}


const test1 = {
        'A' : {'B' : 1 , 'C' : 3},
        'B' : {'E': 9},
        'C' : {'A': 2, 'D': 4},
        'D' : {'B': 6},
        'E' : {'B': 7}

};
//actual output of the graph
const test1AR = ['A','B', 'E'];
//result by the code
console.log("Testing 1");
const test1R  = augmentingPath(test1, 'A','E');
t_f = testingFunction(test1R,test1AR );
printResult(t_f);


//Testing 2

const test2 = {
    'A': {'B': 5, 'C': 7, 'D': 3, 'E': 10},
    'B': {'C': 1, 'D': 2, 'E': 4},
    'C': {'D': 4, 'E': 2},
    'D': {'E': 6},
    'E': {}
  };
//actual output:
console.log("Testing 2");
const test2AR = ['A', 'B', 'C','D', 'E'];
const test2R  = augmentingPath(test2, 'A', 'E');
printResult(testingFunction(test2AR, test2R));


