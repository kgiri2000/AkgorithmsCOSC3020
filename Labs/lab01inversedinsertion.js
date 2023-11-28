function insertionSortReverse(arr){
    for(i = (arr.length-2); i>-1; i--){
        var val = arr[i];
        var j;
        for(j=i; j<arr.length && arr[j+1]<val; j++ ){
            arr[j] = arr[j+1];
        }
        arr[j]= val;
    }
    return arr;
}


//function call

let x = [3,2, 4,9,7,5];
let y = insertionSortReverse(x);
console.log("The sorted list is: ");
console.log(y);


//Testing
function testFunction(arr){
    var size =  arr.length-1;
    for(var i = 0; i< size; ++i){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}
//Testing for the unsorted list
console.log("------------------------------------------")
console.log("Testing for unsorted list:")

let unsorted = [2,3,4,1,6,8,21, 2];
if(testFunction(unsorted) == false){
    console.log("The array is not sorted");
}else{
    console.log("Something wrong with the code");
}

console.log("------------------------------------------")

//Testing for the insertionSortReverse
console.log("Testing for the insertionSortReverse function: ");
if(testFunction(insertionSortReverse(x)) == true){
    console.log("The array is  sorted");
}else{
    console.log("The array is not sorted");
}