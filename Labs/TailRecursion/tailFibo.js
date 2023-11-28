//Kamal Giri
//Lab08
//Fibonacci using Tail Recursion
//This is teh very basic implementation of tail recursion of fibonacci series
//This is implemented with the code provided in the lecture slides of tail recursion method
//of finding the factorial
//Last Modified: 04/14/2023

function fibC(num){

    return fiboR(num, 0,1);
}

function fiboR(num,fib_o, fib_n){
    if(num==0){
        return fib_o;
    }else if(num==1)
    {
        return fib_n;
    
    }else{
        return(fiboR(num-1,fib_n, fib_n+fib_o));
    }
}
console.log("The 8th Fibonacci number is: "+ fibC(8));




//Test Function
//We will try to test the actual first 10 Fibonacci numbers starting from
//F0 to F10 with the first 10 fibonacci numbers from the above algorithms.

let actualFibo = [0,1,1,2,3,5,8,13,21,34,55];

function testFunction(actualFibo){
    let fibCArr = [];
    for(let i = 0; i<actualFibo.lengthl; i++){
        fibCArr[i] = fibC(i);
        console.log(fibC[i]);

    }
    
}
testFunction(actualFibo);




/*
2. Analysis
The asymptotic complexity of tail recursion Fibonacci algorithm is O(n) because we are only calling the function n or 
more preciely (n-2) number of times which is kind of similar to the iterative version of the Fibonacci algorithms.
So, overall time complexity of the algorithms becomes O(n).
On the other side, the time complexity of non-tail recursion, which use traditional recursive function, is 
O(2^n). It is because the algorithms makes two recursive calls for each value of n-2. Hence, the number of 
function calls doubles for each increase of in n, resulting in total of 2^n function calls . Hence, the time com
plexity of regular recursive algorithm is O(n^2).
*/