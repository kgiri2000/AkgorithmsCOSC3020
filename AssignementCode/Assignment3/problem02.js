//Kamal Giri
//COSC 3020
//Spring2023
//Assignment03
//Last Modified: 04/28/2023
//Stochastic Local Search
//2-opt Algorithm for Travelling SalesPerson


//the calling function
function tsp_hk(distance_matrix) {
    let dist = distance_matrix;
    let n = dist.length;
  
    // Creating route array
    let route = Array.from({ length: n }, (_, i) => i);
  
    let shortest = Infinity;

    //Stopping criteria
    let base = 2 ** n;
  
    //initial value for i and k
    // let i = Math.floor(Math.random() * (n - 2 - 1 + 1)) + 1;
    let i = Math.floor((n + 1) / 4);
    // let k = Math.floor(Math.random() * (n - 2 - i + 1)) + i;
    let k = Math.floor((3 * (n + 1)) / 4) - 1;

    

    while (base >= 1) {
      if (n === 2) {
        return dist[route[0]][route[1]];
      }
      //using the algorithm
      let subf = route.slice(0, 1);
      let sub1 = route.slice(1, i);
      let sub2 = route.slice(i, k + 1);
      let sub3 = route.slice(k + 1, n);
      let sub2R = sub2.reverse();
      //different permutation
      let conC = subf.concat(sub1, sub2R, sub3);
      
      let sum = 0;
      for (let i = 0; i < n - 1; i++) {
        sum = sum + dist[conC[i]][conC[i + 1]];
      }
      //finding minmum
      shortest = Math.min(shortest, sum);
      //
      let l = Math.floor(Math.random() * (n - 1 - 1 + 1)) + 1;
      let m = Math.floor(Math.random() * (n - (l + 1) + 1)) + l + 1;
  
      route = conC;
      i = l;
      k = m;
  
      base--;
    }
  
    return shortest;
  }


  //function to create random matrix of desired size
  function generateRandomAdjacencyMatrix(size) {
    const matrix = Array(size)
      .fill()
      .map(() => Array(size).fill(0));
      
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        const weight = Math.floor(Math.random() * 10) + 1; // generates a random integer between 1 and 10 for the weight of the edge
        matrix[i][j] = weight;
        matrix[j][i] = weight;
      }
    }
    
    return matrix;
  }
  const dist1 = [
    [0,1,2,],
    [1,0,2],
    [2,2,0]
    ];
    //Output : 3
  
  const dist2 = [
      [0,7,1,2],
      [7,0,0,3],
      [1,0,0,5],
      [2,3,5,0]
  ];
  //Output: 4
  let size = 21;
  const dist = generateRandomAdjacencyMatrix(size);
  
  console.time("Running Time");
  console.log("Shortest Distance : " +tsp_hk(dist1));
  console.log("When size of matrix is = "+ size);
  console.timeEnd("Running Time");
  