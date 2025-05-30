// const rats = 7;
// const unit = 2;
// const arr = [2,3,7,5,7,4,1,2];
// const n = 8;

// const food = (rats, units, arr, n) => {
//     console.log(rats, units, arr, n);
    
//     return;
// }
// console.log(food(rats, units, arr, n))


// class Solution {
//     kthSmallest(arr, k) {
//         return arr.sort((a,b) => a-b)[k-1];
//     }
// }
// const test = new Solution();
// console.log(test.kthSmallest([1,9,3,2,5],3))

// const arr = [1,2,3,4,5,6,7,8]
// const k = 3;

// function deal(arr,k){
//     if(arr.length < k){
//         return arr.reverse();
//     }
     
//     let result = []
//     for (let i = 0; i < arr.length; i += k) {
//         result.push(arr.slice(i, i+k).reverse())
//     }
//     return result;

// }

// console.log(deal(arr, k))

function getSecondLargest(arr) {
        const sorted = arr.sort((a,b)=>b-a)
        console.log(sorted);
        const uni = [...new Set(sorted)]
        console.log(uni, '-', uni[0], '-', uni[1])
        if(uni[0] == uni [1]){
            return -1
        }
        return uni[1]
    }

    console.log(getSecondLargest([10,10,10]));
    