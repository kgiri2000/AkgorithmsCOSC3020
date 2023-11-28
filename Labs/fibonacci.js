let fibA = [];

function fib(n)
{   
    fib(0)= 0;
    fib(1)= 1;
    if(n>=2){

        fib(n)= fib(n-1)+ fib(n-2);
    }
    return fib(n);
}

let x = fib(4);