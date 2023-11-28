

// Javascript program to implement
// the above approach

// Function to insert vertices to adjacency list
function insert(adj, u, v)
{
	
	// Insert a vertex v to vertex u
	adj[u].push(v);
	return;
}

// Function to display adjacency list
function printList(adj, V)
{
	for(var i = 0; i < V; i++)
	{
		document.write(i);

		for(var j of adj[i])
			document.write(" --> " + j);
			
		document.write("<br>");
	}
	document.write("<br>");
}

// Function to convert adjacency
// list to adjacency matrix
function convert(adj, V)
{
	
	// Initialize a matrix
	var matrix = Array.from(Array(V), ()=>Array(V).fill(0));
	for (var i = 0; i < V; i++) {
		for (var j of adj[i])
			matrix[i][j] = 1;
	}
	return matrix;
}

// Function to display adjacency matrix
function printMatrix(adj, V)
{
	for(var i = 0; i < V; i++)
	{
		for(var j = 0; j < V; j++)
		{
			document.write(adj[i][j] + " ");
		}
		document.write("<br>");
	}
	document.write("<br>");
}

// Driver code
var V = 5;
var adjList = Array.from(Array(V), ()=>Array().fill(0));
	
// Inserting edges
insert(adjList, 0, 1);
insert(adjList, 0, 4);
insert(adjList, 1, 0);
insert(adjList, 1, 2);
insert(adjList, 1, 3);
insert(adjList, 1, 4);
insert(adjList, 2, 1);
insert(adjList, 2, 3);
insert(adjList, 3, 1);
insert(adjList, 3, 2);
insert(adjList, 3, 4);
insert(adjList, 4, 0);
insert(adjList, 4, 1);
insert(adjList, 4, 3);
// Display adjacency list
document.write("Adjacency List: <br>");
printList(adjList, V);
// Function call which returns
// adjacency matrix after conversion
var adjMatrix = convert(adjList, V);
// Display adjacency matrix
document.write("Adjacency Matrix: <br>");
printMatrix(adjMatrix, V);



