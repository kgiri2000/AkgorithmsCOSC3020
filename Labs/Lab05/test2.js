// Define the graph as an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
  };
  
  function dfs(graph, start, node, visited = new Set()) {
    visited.add(node);
    if (node === start) {
      console.log(node);
    }
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        dfs(graph, start, neighbour, visited);
        if (neighbour === start) {
          console.log(neighbour);
          break;
        }
      }
    }
  }
  
  // Driver Code
  dfs(graph, 'A', 'D');
  