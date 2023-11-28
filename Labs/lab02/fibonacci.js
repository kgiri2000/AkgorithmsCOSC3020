//Kamal Giri
//COSC 3020
//lab02
//02/01/2023
//Fibonacci sequence

let arr =  [];
const n = 1;
function fib(n){
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return fib(n-1)+fib(n-2);
    }

}
for(i = 0; i<=n ; i++){
    arr[i] =  fib(i);
}

console.log(arr);



