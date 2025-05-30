function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1; 

    while (left <= right) {
      
        let middle = Math.floor((left + right) / 2);
        console.log(middle);
        
        if (arr[middle] === target) {
            console.time();
            console.log(true);
            
            return middle;
        } else if (arr[middle] < target) {
            left = middle + 1; 
        } else {
            right = middle - 1;
        }
    }
    
    return -1;
     
}

console.log(binarySearch([1,2,3,4,5,6,6,7,8,9,10,11,12,13,1,7,8,9,10,11,12,13,14,15], 14))