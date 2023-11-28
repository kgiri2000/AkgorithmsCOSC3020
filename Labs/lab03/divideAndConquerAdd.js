function divideAndConquer(a){
    return dcsum(a, 0, a.length-1);
}

function dcsum(a, lo, high){

    if(high==lo){
        return a[lo];
    }
    var lowerq = Math.floor((lo +high)/3);
    var upperq = Math.floor((high+lo)/1.5);

    return dcsum(a, lo, lowerq) + dcsum(a, lowerq+1, upperq) + dcsum(a, upperq+1, high);

   
}
let arr1  =[ 1,2,4];
console.log("Checking for the arr1 : " + arr1);
console.log("The sum of the array by divide and conquers is: " + divideAndConquer(arr1));


//Test Function:

function testFunction(x){
    var sum = 0;
    for(let i = 0; i<x.length; i++){
        sum = sum+x[i];
    }
    return sum;
}
//Testing with array arr1
console.log("---------------------------------------------")
console.log("Testing the Code");
if(divideAndConquer(arr1)==testFunction(arr1)){
    console.log("The code is working correctly.");
}else{
    console.log("The code is not working as expected.");
}

