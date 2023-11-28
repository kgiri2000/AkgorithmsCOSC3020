//Kamal Giri
//Lab06
//COSC302
//Last Modified: March 25

//Very Simple implementation of Depth-First Search
//I got help from 
// i. Wikipedia

// https://en.wikipedia.org/wiki/Depth-first_search
//ii. https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/

//Code

//Creating Recursive Function for Depth-First Search

function depthFirstSearch(graph, start, node){
    let connected = false;
    let visited = {};
    result = dfs(graph, start, node, visited, connected);
    if(result){
        return node;
    }else{
        return false;
    }

    
}

function dfs(graph, start, node, visited, connectd){
    //array to keep track of visited nodes
    visited[start] = true; 
    //base case
    if(start == node){
        //console.log(start);
        connectd = true;
        return connectd;
    }

    for(let i of graph[start]){
        if(!visited[i]){
            connectd = dfs(graph, i, node, visited);
            if(connectd){
                //console.log(start);
                return connectd; 
            }

        }
    }
    if(!connectd){
        connectd = false;
        return connectd;
    }
}

//Creating the adjacencyList of the graph like in previous lab05

const adjListGraph = {'A' : ['B', 'C'], 'B' : ['D'], 'C':['D'], 'D' : []};


//Calling the function

console.log(depthFirstSearch(adjListGraph, 'A', 'D'));



//Test Function

//Test 1
console.log("Test 1");
let test1 = depthFirstSearch(adjListGraph, 'A', 'B');
if(test1 == 'B'){
    console.log("Test 1 is correct");
}else{
    console.log("Test 1 is incorrect");
}


//Test2
console.log("Test 2");
let test2 = { 'A' : ['B'], 'B': []};
test2 = depthFirstSearch(test2, 'B', 'A');
if(test2 == 'A'){
    console.log("Test 2 is correct");
}else{
    console.log("Test 2 is incorrect");
}



//Time Complexity

/*
The Worst timecomplexity is easy to determine for ths case
The above code is using recursion and the for loop to go through every node and edges 
Hence, if we traverse from the frist node to the last node having all the edges then that
will the worse time complexity of the above code which can be written as 
θ(V +E) where,
V = numbers of vertices
E = number of edges
*/