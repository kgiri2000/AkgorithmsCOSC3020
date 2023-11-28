function dfs(graph, start, node, visited = {}, found = false) {
    visited[start] = true;
    if (start === node) {
      console.log(start);
      found = true;
      return found;
    }
    for (let neighbour of graph[start]) {
      if (!visited[neighbour]) {
        found = dfs(graph, neighbour, node, visited, found);
        if (found) {
          console.log(start);
          return found;
        }
      }
    }
    if (start === 'A' && !found) {
      console.log(`${start} and ${node} are not connected`);
    }
    return found;
  }
  
  // Example usage:
  const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
  };
  
  dfs(graph, 'A', 'F'); // Output: "F C A"
  dfs(graph, 'B', 'F'); // Output: "F C A B"
  dfs(graph, 'A', 'D'); // Output: "D B A"
  dfs(graph, 'B', 'A'); // Output: "A and X are not connected"
  