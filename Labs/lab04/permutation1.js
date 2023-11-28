//Kamal Giri
//COSC 2030

var j=1;
function  permutationM(arr, index){

    if(index == arr.length-1){
        //using compare function to test each permutation
        return compare(arr);
         ;
    }
    for(var i = index; i<arr.length; i++){

        swap(arr, i, index);
        permutationM(arr, index+1);
        swap(arr,i,index);
        
    } 
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
}

function compare(arr){
    
    //to see all the permutations
    //console.log(arr);
    sorted = true; 
    for(var i = 0; i< arr.length-1; i++){
        if (arr[i]> arr[i+1]){
            sorted = false;
            break;
        }
    }
    if(sorted){

        console.log("Sorted here");
        //console.log(arr);
        //console.log("When j = "+j);
        console.log("The number of permutation compared is "+ j);
        return arr;
    }
    j =j+1;
}

function permutationSort(arr){
    var index = 0;
    return permutationM(arr, index);
    
}

arr= [88,9,6,5];
//Calling the function
permutationSort(arr);





