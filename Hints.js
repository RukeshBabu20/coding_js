/*
Two pointer technique
usecases:
Two Sum in Sorted Arrays, Closest Two Sum, Three Sum, Four Sum, Trapping Rain Water

*/
for (let i=0; i<arr.length; i++){
    for (let j=i+1; j<arr.length; j++){
        console.log(arr[i], arr[j])
    }
}

arr.sort((a, b) => a - b); // Sort the array in ascending order
let left = 0, right = arr.length - 1;
let result = 0;

while (left < right) {
    if (arr[left] + arr[right] < target) {
        result += right - left; // Count all pairs from left to right
        left++; // Move the left pointer forward
    } else {
        right--; // Move the right pointer backward
    }
}

//+++++++++++++++++++++++++++++++++++++++++++++