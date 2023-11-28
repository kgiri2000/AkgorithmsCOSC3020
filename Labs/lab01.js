function insertionSort(arr){
    for(var i = 1; i<arr.length; i++){
        var val = arr[i];
        var j;
        for(j = i; j>0 && arr[j-1]>val; j--){
            arr[j]=arr[j-1];
        }
        arr[j]= val;
    }
    return arr;
}

//function call

let x = [1,3,2,4,5,6];
console.log("The sorted list is: ");
console.log(insertionSort(x));


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
console.log("Testing for the insertionSort function: ");
if(testFunction(insertionSort(x)) == true){
    console.log("The array is  sorted");
}else{
    console.log("The array is not sorted");
}