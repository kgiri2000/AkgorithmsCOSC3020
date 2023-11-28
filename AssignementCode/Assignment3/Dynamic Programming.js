//Kamal Giri
//COSC 3020
//Spring2023
//Assignment03
//Last Modified: 04/28/2023
//Dynamic Programmin
//Held-Karp Algorithm for solving the for Travelling SalesPerson Problem
//Help: Online lectures on Held-Karp Algorithms 



function tsp_hk(distance_matrix){
    let mask = 1;
    let pos = 0;
    let dist = distance_matrix;
    let n = dist.length;
    let VISITED_ALL = (1 << n)-1;

    


    function tsp(mask, pos){
        if (mask == VISITED_ALL) {
            return 0;
        }
        //using memoziation
        if (memo[mask][pos]!= -1) {
            return memo[mask][pos];
        }
        let ans = Infinity;
        
        for (let city = 0; city < n; city++) {
            if ((mask & (1 << city)) == 0) {
                let newAns = dist[pos][city] + tsp(mask | (1 << city), city);
                ans = Math.min(ans, newAns);
            }
        }

        if (!memo[mask]) {
            memo[mask] = [];
        }
        memo[mask][pos] = ans;
        
        return ans;
    }
    //calling recursion 
    return tsp(mask, pos);
}




function generateRandomAdjacencyMatrix(size) {
    const matrix = Array(size).fill() .map(() => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        const weight = Math.floor(Math.random() * 10) + 1; 
        matrix[i][j] = weight;
        matrix[j][i] = weight; 
      }
    }
    
    return matrix;
  }
  let size =  24  ;
  const Amaxtrix = generateRandomAdjacencyMatrix(size);
  const distM = [
    [0,1,2],
    [1,0,2],
    [2,2,0]
  ];
  //Correct Answer: 3

  const distM2 = [
    [0,7,1,2],
    [7,0,0,3],
    [1,0,0,5],
    [2,3,5,0]
]; 
//Correct answer = 4

let memo = new Array(1 << size).fill().map(() => new Array(size).fill(-1));

console.time("Running Time:");
console.log("The Shortest Path for input : " + tsp_hk(distM));
console.log("When size of input is " + size);
console.timeEnd("Running Time:");