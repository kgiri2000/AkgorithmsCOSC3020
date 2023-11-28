//Kamal Giri
//Lab07
//04/08/2023
//Help from GeeksfromGeeks/Textbook/Youtube Lectures

//Creating the function
function dijkstra(graph, source){
    //Initializing the dist to each vertex to infinity and source to 0
    const dist = {};
    for(let v in graph){
        dist[v] = Infinity;
    }
    dist[source] = 0;

    //Using a priority queue to keep track of unmarked vertices

    const queue = [];
    queue.push([0, source]);

    while(queue.length  > 0){
        //Getting the unmarked vertex with lowest distance
        const [d,v] = queue.shift();

        if(d> dist[v]){
            //Ignore
            continue;
        }
    
    for(let i in graph[v]){
        const weight = graph[v][i];
        const nDist = dist[v] + weight;
        if(nDist < dist[i]){
            dist[i]= nDist;
            queue.push([nDist, i]);
            }
        }
    }
    return dist;
}

const graph1 = {
    'A': {'B': 2, 'C': 3},
    'B': {'A': 2, 'C': 1, 'D': 4},
    'C': {'A': 3, 'B': 1, 'D': 1},
    'D': {'B': 4, 'C': 1, 'E': 2},
    'E': {'D': 2}
  };
  
  const shortest1 = dijkstra(graph1, "A");
  console.log("The Shortest path to every node for graph1 from A is: ");
  console.log(shortest1);


  const shortest1_2 = dijkstra(graph1, "C");
  console.log("The Shortest path to every node for graph1 from C is: ");
  console.log(shortest1_2);

  

  const graph2 = {
        'A' :{'B': 1, 'D': 1},
        'B' :{'C': 2, 'E': 7},
        'C' :{'F': 5},
        'D' :{},
        'E' :{'C': 5, 'D': 2, 'F': 6},
        'F' :{}
  };

const shortest2 = dijkstra(graph2, 'A');
console.log("The Shortest path to every node for graph2 from A is ");
console.log(shortest2);


/*
The big - theta of my implementation is 0((E+V)logV) where E is total number of edges and V is the total number of vertices. The reason behind the 
complexity is that we are visting every node and vertices which will give us 0(E+V) and since, we are using 
priority queue to store unmarked vertices with distances requires the adding and removing items from the queue so, it will cost us 
logarithmic time at most and it will be logarithimic of every vertices we are storing , so it will be 0(logV).
Hence, the big-theta is 0((E+V)logV).


*/