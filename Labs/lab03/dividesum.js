function dc(a){
    return dcsum(a, 0, a.length-1);
}

function dcsum(a, low, high){
    
    if(low==high){
        return a[low];
    }
    var mid = Math.floor((low+high)/2);
    return  dcsum(a, low, mid)+dcsum(a, mid+1, high);
}

let x = [1,2,3,4];

console.log(dc(x));