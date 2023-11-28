function fib(n){
    let fib_o = 1;
    var fib = 1;
    var fib_new;

    while(n>2){
        fib_new = fib+ fib_o;
        fib_o= fib;
        fib = fib_new;
        --n;
    }
    return fib;
}

console.log(fib(6));