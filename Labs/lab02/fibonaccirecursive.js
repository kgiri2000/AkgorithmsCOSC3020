//Kamal Giri
//COSC 3020
//Lab02
//02/03/2023


function fibo(n){

    arr = [0,1];
    if(n<1){
        return arr.slice(0,1);
    }
    if(n==1){
        return arr.slice(0,2);
    }
    if(n>1){
        for(let i =1; i<= (n-1); i++){
            arr.push(arr[arr.length -1] + arr[arr.length- 2]);
        }
        
    }
    return arr;

}

//Printing the fibonacci series:

console.log("Fibonacci Seires upto 0 :")
console.log(fibo(0));
console.log("Fibonacci Seires upto 5 :")
console.log(fibo(5));
console.log("Fibonacci Seires upto 7 :")
console.log(fibo(7));


//Test Function

console.log("--------------------------------------------------------")
let testOutput0 = [0];
//checking with wrong fibonacci series
let testOutput5InCo = [0,1,1,6,3,5];
let testOutput7 = [0,1,1,2,3,5,8,13];

function testF(arr1, arr2){
    for(let i = 0; i<=arr1.length; i++)
    {
 
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
}
//Testing 1
console.log("Testing 1")
if(testF(fibo(0), testOutput0)){
    console.log("The Code is Correct");
}else{
    console.log("The Code is Incorrect");
}

//Testing 2 with incorrect fibonacci series

console.log("Testing 2")
if(testF(fibo(5), testOutput5InCo)){
    console.log("The Fiboncci Series is Correct");
}else{
    console.log("The provided Fibonacci series  is Incorrect");
}

//Testing 3 for first 8 fibonaccci

console.log("Testing 3");

if(testF(fibo(7), testOutput7)){
    console.log("The Code is Correct");
}else{
    console.log("The Code is Incorrect");
}