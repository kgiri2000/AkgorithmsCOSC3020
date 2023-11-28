//Kamal Giri
//COSC 3020
//Lab09

function allPairsShortestPaths(graph){

    INF =  Infinity;
    //finding the length of graph
    num = graph.length;

    //Initalize the dist to Infinity
    const dist = Array.from({ length: num }, () => Array.from({ length: num }, () => Infinity));

    //Setting diagonal  to 0
    for(let v = 0; v< num; v++){
        dist[v][v] = 0;
    }

    //Setting the weight

    for (let u = 0; u < num; u++) {
        for(let v = 0 ; v <num; v++){
            dist[u][v] = graph[u][v];
        }
    }

    //Algorithm

    for(let k = 0; k< num; k++){
        for(let i = 0; i< num; i++){
            for(j = 0; j<num; j++){
                if(dist[i][j] > dist[i][k]+dist[k][j]){
                    dist[i][j]= dist[i][k]+dist[k][j];
                }
            }
        }
    }
    

    return dist;
}

const graph = [[0, 3, 8, Infinity],
            [Infinity, 0, Infinity, 1],
             [Infinity, 4, 0, Infinity],
            [2, Infinity, -5, 0]
    ];
  
console.log("The shortest path between all pairs of vertices is: ");
console.log(allPairsShortestPaths(graph));

//Testing 
function testFunction(obtained, expected){
    for(let i = 0; i< obtained.length; i++){
        for(let j = 0; j< obtained.length; j++){
            if(obtained[i][j] != expected[i][j]){
                return false;
            }

        }
    }
    return true;
}
//Print function
function printR(t_f){
    if(t_f){
        console.log("The code is correct");
    }else{
        console.log("The test is not correct");
    }
}

//Test1
console.log("Testing 1");
const graph1 = [
    [0, 2, 4, Infinity],
    [2, 0, 1, 4],
    [4, 1, 0, 3],
    [Infinity, 4, 3, 0]
];
const expected1 = [ [ 0, 2, 3, 6 ], 
            [ 2, 0, 1, 4 ], 
            [ 3, 1, 0, 3 ], 
            [ 6, 4, 3, 0 ] ];

const t_f = testFunction(allPairsShortestPaths(graph1), expected1);
printR(t_f);

//Test2
console.log("Testing 2");
const graph2 = [
    [0, 1, 2, Infinity],
    [4, 0, 5, 6],
    [7, 8, 0, 9],
    [Infinity, 10, 11, 0],
  ];

  const expected2 =  [ 
                    [ 0, 1, 2, 7 ], 
                    [ 4, 0, 5, 6 ], 
                    [ 7, 8, 0, 9 ],
                     [ 14, 10, 11, 0 ] ];

const t_f2 = testFunction(allPairsShortestPaths(graph2), expected2);
printR(t_f);



/*
Time Complexity

The worst time complexity of the above algorithm is O(n^3) where n is the number of vertices 
in the graph. It uses three nested loop to iterate through every vertex in the graph and for it
vertex pair pair it calculates the shortest path. Hence, it has to perform n^3 total iteration which
is the worst time complexity for this algoritms.
*/