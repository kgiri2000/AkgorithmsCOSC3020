//Kamal Giri
//COSC 2030

//to store the number of permutation
var j=1;
function  permutationM(arr, index){

    if(index == arr.length-1){
        //using compare function to test each permutation
        sorted = true; 
        //testing for the sorted list
    for(var i = 0; i< arr.length-1; i++){
        if (arr[i]> arr[i+1]){
            sorted = false;
            break;
        }
    }
    //when the list is sorted
    if(sorted){

        console.log("Sorted here");
        console.log(arr);
        //console.log("When j = "+j);
        console.log("The number of permutation compared is "+ j);
    
    }
    j =j+1;
   
    
    }
    //using recursion to create the permutation
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


function permutationSort(arr){
    var index = 0;
    return permutationM(arr, index);
    
}

arr= [88,9,6,5];
//Calling the function
permutationSort(arr);
//permutationSort(arr);



//Time Complexity for the above code:

/*
    I have implemented the code differently. My code is getting all the permutation of the given set. Since, it is getting all the permutation and while 
    getting each permutation, it is checking whether the obtained permutation is sorted or not. 
    Now, the permutationSort function is calling the permutationM function which is getting the permutation of 
    n number of data in the array so the 
    Time complexity to get the n permutation is O(n!).
    Again, we are calling the swapping function twiice, which swap the in O(1) constant time.
    And, we are using the comparision function for the length of the array  which is done in O(n).

    Hence, we are creating n! permutation and comparing each elements in the permutation so, 
    the time complexity of the code is O(n!*n)

    The worst and best case is alos O(n!*n) since, the code is making n! all the time and comparsion is made to those permutation.

    When the permutations are gernerated randomly then our best case becomes 0(n) because there is the chance that our first generated permutation is 
    a sorted array; however, the worst case can go upto O(infinity). As we are randomly generating the permutation, we might not able to 
    create the exact sorted permutatation.


*/
