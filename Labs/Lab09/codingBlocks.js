
let dist = [
    [0,1,2],
    [1,0,2],
    [2,2,0]
];
const n  = dist.length;
let ans = Infinity;
let VISITED_ALL = (1<<n) -1;

function tsp(mask, pos){
    //mask denotes set of cities we have visited so far
    //Pos = which city to city; position of the city
    //Base case
    if(mask == VISITED_ALL){
        return dist[pos][0];
    }

    //try to go to unvisited city
    for(let city = 0; city<n; city++){
        if((mask & (1<<city))==0){
            let newAns = dist[pos][city] + tsp(mask|(1<<city), city);
            ans = Math.min(ans, newAns);
        }
    }

}

console.log(tsp(1,0));

console.log(n);
console.log(VISITED_ALL);

console.log(VISITED_ALL.toString(2));