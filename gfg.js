const inte = 1002;
console.log((inte.toString().includes('0')))

console.log(inte.toString().replaceAll('0','5'))

function binSort(arr) {
        // code here
        let res = [];
        if(!arr.includes(0)) return arr;
        for(let i=0; i<arr.length; i++){
            if(arr[i] == 0){
                res.unshift(arr[i])
            }else{
                res.push(arr[i])
            }
        }
        return res;
    }

    console.log(binSort([1,0,1,0,1,1,0,1]))

   function minProduct(arr, k) {
        // your code here
        const sorted = arr.sort((a,b)=>a-b);
        console.log(sorted);
        console.log(sorted[0], '______',k)
        console.log(sorted.slice(sorted[0], k))
        const chunk = sorted.slice(sorted[0],k+1);
        return chunk.reduce((acc, cur)=> acc*cur, 1)
    }

    console.log(minProduct([1,2,3,4,5,1,4],2));



function getMaxOccuringChar(str) {

    const charCount = {};

    for(const char of str){
        if(charCount[char]){
            charCount[char]++
        }else{
            charCount[char] = 1
        }
    }

    console.log(charCount);

}

console.log(getMaxOccuringChar("testingtessgasesss"))

function findSum(str){
    let res = 0;
    for(let i=0; i<str.length; i++){
        if(!isNaN(str[i])){
            res+=Number(str[i])
        }
    }
    return res;
}

console.log(findSum('12safas32'))

function uncommonChars(s1, s2) {
        // code here
        let str1 = new Set(s1);
        let str2 = new Set(s2);
        const unique = [...[...str2].filter((item)=> !str1.has(item)),...[str1].filter((item)=> !str2.has(item))]
        return unique
    
    }
    
console.log(uncommonChars("asdfassdfsad","asdfasdfwerwefdsf"))

const S1 = "Hello";
const S2 = "Bye"
function merge(S1, S2) {
    let res = '';

    
}
console.log(merge(S1, S2))

// function firstRep(s){
//        //code here

//        let res = {};

//         for (let char of s) {
//         res[char] =  (res[char] || 0) +1
//        }
//        const finas = (Object.keys(res)[0]);
//        const test = Object.values(values).filter((item)=> item)
//        return finas;
       
// }

// console.log(firstRep("geeksforgeeks"))

function modify(s){
    //code here
    let vowel = '';
    let word = s.split(',');
    console.log(word);
    const myset = new Set(['a','e','i','o','u']);
    for(let i=0; i<s.length; i++){
        if(myset.has(s[i])){
            vowel+=s[i]
            word
        }
    }
    return vowel;
}
console.log(modify("practice"))

function distinct(str) {
return new Set(str);
    console.log(myset.size);
    return str;
}

console.log(distinct('hqghumeaylnlfdxfircvscxggbwkfnqduxwfnfozvs'))

function multipleArrayPuzzle(arr) {
    let res = []
    for (let i=0; i<arr.length; i++){
        if(arr.includes(arr[i])){
            res.push(
                arr
                .filter((_, index) => index !== i)
                .reduce((acc, cur)=> (acc*cur),1)
            )
        }
    }
    return res;
}
console.log(multipleArrayPuzzle([10, 3, 5, 6, 2]))

function removeDuplicates(arr) {
        let res = [];
        
        for (let i=0; i<arr.length; i++){
            if(!res.includes(arr[i])){
                res.push(arr[i])
            }
        }
        
        return res;
    }
console.log(removeDuplicates([2,2,2,2,2,1,2,4,5]))

function findUnique(k, arr) {
        // Code here
        let res = {};
        
        for (const char of arr){
            res[char] = (res[char] || 0) + 1
        }

        return Object.keys(res).find(key => res[key] !== k)
        
    }

console.log(findUnique(3,[6, 2, 5, 2, 2, 6, 6]));


function alternateSort(arr) {
    const sorted = arr.sort((a,b)=>a-b)

    let left = 0;
    let right = sorted.length-1;
    let result = []

    while (left<right){
        console.log(sorted[left], sorted[right])
        result.push(sorted[right])
        right--;
        result.push(sorted[left])
        left++;
    }
    if (left === right) {
        result.push(sorted[left]);
    }

    return result
}
console.log(alternateSort([7, 1, 2, 3, 4, 5, 6]))

function common_concat(s1, s2){
    let res = {};
    let fin = ''
    
    for (const char of s1){
        res[char] = (res[char] || 0) + 1
    }

    for (const char of s2){
        res[char] = (res[char] || 0) + 1
    }

    const final = Object.keys(res).filter((key)=> res[key] === 1).join('')
    if(final.length === 0){
        return -1
    } else{
        return final
    }
}
console.log(common_concat('abc','abc'))

function mostFrequentChar(str){
    let res = {}

    for (const char of str){
        res[char] = (res[char]||0)+1
    }

    const max = Math.max(...Object.values(res));

    const final = Object.keys(res).filter((item)=> res[item] === max).join('')

    return final.split('').sort().join('')[0];
}
console.log(mostFrequentChar("testsample"));

function unCommonChars(s1,s2){
    let res = {}

    for (const char of s1){
        res[char] = (res[char] || 0) + 1
    }

    for (const char of s2){
        res[char] = (res[char] || 0) + 1
    }
    console.log(res);

    const fin = Object.keys(res).filter((item)=>res[item]===1).sort().join('');

    return fin;
}
console.log(unCommonChars("swknwhkhhr","cgx"));

function removeChars(s1,s2){
    // const set1 = new Set(s2);
    
    return [...s1].filter((item)=> !s2.includes(item)).join('');


}
console.log(removeChars("computer","cat"));

function isParenthesisBalanced(s) {
    
    let stack = [];

    let mapBracs = {
        "}":"{",
        ")":"(",
        "]":"["
    }

    for (let char of s){
        if(char in mapBracs){
            const top = stack.length > 0 ? stack.pop() : "#";
            if(top !== mapBracs[char]){
                return false
            }
        }else{
            stack.push(char)
        }
    }
    return true
}
console.log(isParenthesisBalanced("[{()}}]"));

// function areIsomorphic(s1, s2) {
//         // code here
//         let ss1 = {};
//         let ss2 = {};
        
//         for(const char of s1){
//             ss1[char] = (ss1[char] || 0) + 1
//         }
//         for(const char of s2){
//             ss2[char] = (ss2[char] || 0) + 1
//         }
//         for (let key of ss1) {
//             if (ss1[key] !== ss2[key]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// console.log(areIsomorphic("aab","xxy"));

function peakElement(arr) {
    let start = 0;
    let maxSum = 0;
    let currentSum = 0;

    for (let i=0; i<arr.length; i++){
        currentSum+=arr[i]
    }
}
console.log(peakElement([1, 2, 4, 5, 7, 8, 3]));

function firstRepeatingElementArray(arr){
    let res = {};

    for (const char of arr){
        res[char] = (res[char]|0)+1
    }
    const max = Math.max(...Object.values(res));

    const final = Object.keys(res).filter((item)=> res[item] === max).join('')

    return arr.findIndex((item)=> item === Number(final)) + 1;
}
console.log(firstRepeatingElementArray([3,2,2,3,4,2,1,3,3,4,3]))

function firstRepeatingArray(arr){
    let res = {};

    for(const char of arr){
        res[char] = (res[char] ||0) + 1
    }
    console.log(res);
    const repeatingArrays = Object.keys(res).filter((item)=> res[item] !== 1)
    return repeatingArrays;
}
console.log(firstRepeatingArray([1,2,3,1,2,3,4,5]));
