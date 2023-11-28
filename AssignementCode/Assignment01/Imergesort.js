//Author: Kamal Giri(W10026697) and Benjamin P. Wilkin(W10015903)
//COSC 3020
//Spring 2023
//Homework 1
//Last modified: 02/17/2023

//Iterative method of merge sort

//comparing and merging 
function merge(arr, low, mid , high){
    var i = low;
    var j = mid+1;
    var k = low;
    
    let buffer = Array();
    while(i<= mid && j<= high){
        if(arr[i]<arr[j]){
            buffer[k++] = arr[i++];
        }else {
            buffer[k++] = arr[j++];
        }
    }
    while(i<=mid){
        buffer[k++] = arr[i++];
    }
    while(j<=high){
        buffer[k++] = arr[j++];
    }
    for(var i = low; i<=high; i++){
        arr[i]= buffer[i];
    }
    return arr;
}

function mergesort(arr){
    var pass;
    var n =  arr.length;
   
    for(pass=2 ; pass<=n; pass = pass*2){
        for(var i = 0; (i+pass-1)<n; i = i+pass){
            var low = i;
            var high = i+pass-1;
            var mid = Math.floor((low+high)/2);
            merge(arr, low, mid , high);
        }
    }
    if(pass/2 < n){
        merge(arr, 0, pass/2-1, n-1);
    }
    return arr;
}


console.log("First array sorting: ");
arr1 = [ 0,1,4,5,6,2,-1000,0,90];
console.log("Original array" +   arr1);

mergesort(arr1);
console.log("Sorted array: "+ arr1);

console.log("Sorting second array");
arr2 = [ -99,0,100,22,-999];
console.log("Original array" + arr2);

mergesort(arr2);
console.log("Sorted array: "+ arr2);


/*
Time Complexity of the Code:
We are using the iterative version of the merge sort in the above code.
We are solving the above problem through two way merge method where we merge the two sorted list.
This also make the merging in place.
So, essentially, what we are doing is taking each element of the array as the list and merging them
after sorting. When we visualize this:
        9  4  2  1  7  5  0  3
        \  /  \  /  \  /  \  /
        4 9    1 2   5 7  0 3       1st pass
         \      /     \    /
          \    /       \  /
        1  2  4  9   0  3  5 7      2nd pass
             \           /
              \         /
        0  1  2  3  4  5  7  9      3rd pass


Now, In each pass, we are dealing with n number of elements and merging them as appropriate.
This is exactly done in our merge function where are working with n elements eac pass.
Also, we can infer that this is inversed binary tree with heigt logn so we exactly doing the logn 
number of passes for n number of input so,
combining n merges with logn total passes, we can sat that

The complexity of the problem is  O(nlogn)

ALso, for worst case complexity is also Θ(nlogn) as we have to go through all the elements(compare) to merge
nomatter, how the elements are sorted and we still have to fo throug logn passes to complete the merge 
so, the worst time complexity  = Θ(nlogn).

*/ 
 