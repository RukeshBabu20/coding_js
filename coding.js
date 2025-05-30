function sumTwoNum (a,b){
    return a+b
}
console.log(sumTwoNum(10,20))

function maxNumInArr(arr){
    let max = arr[0];
    for (let i=0; i<=arr.length-1; i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }
    return max;
}
console.log(maxNumInArr([1,2,3,4,345,6]))

function pali(str){
    const reversed_str = str.split('').reverse().join('');
    if(str.toLowerCase() === reversed_str.toLowerCase()){
        return "pali"
    }else{
        return 'not pali'
    }
}
console.log(pali('ece'))

function reverse_arr(arr){
    let result = [];
    for(let i=arr.length-1; i>=0; i--){
        result.push(arr[i])
    }
    return result;
}
console.log(reverse_arr([1,2,3,4,5]))

for (let i=0; i<= 20; i++){
    if(i%2==0){
        console.log(i)
    }
}

const test = [1,2,3,4,5].reduce((acc,num)=>{
    if(num % 2 == 0){
        acc.push(num)
    }
    return acc;
},[])
console.log(test)

const factorial = [1,2,3,4,5,6].reduce((acc, num)=>{
    return acc * num;
})
console.log(factorial,'Factorial')

const nested_arr = [[1,2],[2,4],[3,4]].flat();
console.log(nested_arr,'Nested Array')

function fibonacci(n){
    let fib = [0,1];
    for (let i=2; i<=n; i++){
        console.log(fib)
        fib[i] = fib[i-1] + fib[i-2]; //JavaScript arrays do not remove elements when you assign a value to an index that already exists.
    }
    return fib;

}
console.log(fibonacci(10))

const str = "hello world i am rukesh"

function capitalize_str(str){
    let result = "";

    const seperated = str.split(' ')
    for (let i =0; i<=seperated.length; i++){
        result+=seperated[i].charAt(0).toUpperCase() + seperated[i].slice(1)
    }

    return result.trim();
}
// console.log(capitalize_str(str));

const sortedArr = [1,2,3,4,5,3,2,4,5].sort((a,b) => a-b)
console.log(sortedArr) // only minus the numbers, other than sort everything.

const remove_duplicates = sortedArr.reduce((acc, cur)=>{
    if(!acc.includes(cur)){
        acc.push(cur)
    }
    return acc;
},[])
console.log(remove_duplicates,'Remove duplicates')

const anagram = "silent".split('').sort().join('') === "listen".split("").sort().join('');
console.log(anagram)

const arr1 = [1,2,3,4,5]
function min_max(arr){
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i<=arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
        if(arr[i]< min){
            min = arr[i]
        }
    }
    return [min, max]
}
console.log(min_max(arr1))

sorted_arr1 = [1,2,3]
sorted_arr2 = [4,5,6,7,2]

res = (sorted_arr1.concat(sorted_arr2)).sort((a,b)=>a-b)
console.log(res)

function isPrime(n){
    if(n<=1) return false;
    const max = Math.sqrt(n)
    
    for (let i=2;  i<=max; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(10))

const sum_arr = [1,2,3,4,5].reduce((acc, cur)=>{
    return acc+cur;
},0)
console.log(sum_arr)

function occurence(str,char){
    let count = 0
    for (let i=0; i< str.length; i++){
        if(str[i] === char){
            count++
        }
    }
    return count;
}
console.log(occurence('Rukesh Babubbbb','b'));

// function word_occurence(str){
//     let result=[];
//     const splited = str.split(' ')
//     for(let i=0; i<splited.length; i++){
//         console.log(splited[i])
     
//         result.push({word:splited[i], count: "i++"})
//     }
//     return result;
// }
// console.log(word_occurence("I am I am good Owner"))

const remove_duplicates_set = [...new Set([1,2,3,2,1,3,2])];
console.log(remove_duplicates_set);

console.log(new Set([1,2,3,4,5]).size == [1,2,3,4,5].length, 'checks if item is unique');

console.log([2,3,4].filter(item => (new Set([1,2,4])).has(item)),'throws commons values')

console.log([2,3,4,5].filter(item => !(new Set([1,2])).has(item)),'Throws the difference')

console.log(new Set("Hellolo").size)

console.log([1,2,6].every(item => (new Set([1,2,3,4,5])).has(item)),'Checks the arr2 is the subset of arr1')

function count_occurences_set(arr) {
    const result = {};
    console.log(arr.split(' '))
    console.log(new Set(arr.split(' ')))
    for (const item of new Set(arr.split(' '))){
        result[item] = arr.split(' ').filter(i => i===item).length
    }

    return result;
}
// console.log(count_occurences_set([1,2,3,4,5,5,4,3,2]))
console.log(count_occurences_set("I am I am Indian"))

var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arrayList=[],'empty an array')
console.log(arrayList.length = 0, arrayList, 'empty an arr')

console.log(10.2 % 1 == 0, 'Check if integer')

const duplicate_arr = [1,2,3,4,5].concat([1,2,3,4,5])
console.log(duplicate_arr)

const arr_spread = [1,2,3,4,5]
console.log(arr_spread, typeof arr_spread)
console.log(...arr_spread, typeof arr_spread)
console.log(Array.isArray(...arr_spread),'Check if array or not')

function fizbizz(n){
    let res = '';
    for (let i=1; i<=n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            res += " fizbuzz ";
        } else if (i % 3 === 0) {
            res += " fizz ";
        } else if (i % 5 === 0) {
            res += " bizz ";
        } else {
            res += i + ' ';
        }
    }
    return res;
}
console.log(fizbizz(20))

function multiply(x){
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
}
console.log(multiply(5)(6)(8));

function first_non_repeating_char(str){
    for (let i=0; i<str.length; i++){
        console.log(str.indexOf(str[i]), ' index');
        console.log(str.lastIndexOf(str[i]), ' last index')
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}
console.log(first_non_repeating_char("swiss"));

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({name: "Rukesh"},{age:10}))

const arrLeader = (a) => {
    let res = []
    
    for (let i=a.length-1; i>0; i--){
        console.log(a[i], a[i-1])
        if(a[i] >= a[i-1]){
            res.push(a[i])
        }
    }
    if(!res.includes(a[a.length-1])){
        res.push(a[a.length -1 ])
    }
    return res
}
console.log(arrLeader([16, 17, 4, 3, 5, 2]));

const missing_repeating_ele = (arr) => {
    let res = [];
    let repeat = [];
    const sorted = arr.sort((a,b)=>a-b);

    sorted.forEach((item)=>{
        if(!res.includes(item)){
            res.push(item)
        }else{
            repeat.push(item)
        }
    })

    for(let i=0; i<res.length-1; i++){
        if(res[i] + 1 !== res[i+1]){
            repeat.push(res[i]+1)
        }
    }

    if(repeat.length == 1){
        if(sorted[0] !== 1){
            repeat.push(1)
        }else{
        repeat.push(sorted.at(-1) + 1)
        }
    }

    return repeat;
}
console.log(missing_repeating_ele( [7, 5, 8, 5, 2, 6, 3, 4] ));

function firstElementKTime(arr, k) {
        if(arr.length === new Set(arr).size) return -1

        let res = [];
        let repeat = new Set();

        for (let i=0; i<arr.length; i++){
            if(!res.includes(arr[i])){
                res.push(arr[i])
            }else{
                repeat.add(arr[i])
            }
        }
        
}
console.log(firstElementKTime([1, 7, 4, 3, 4, 8, 7],2));
   

function sumClosest(arr, target) {
   
            if(arr.length == 1) return [];
            let res = [];
            
            for (let i=0; i<arr.length; i++){
                console.log(arr[i], 'i')

                for (let j=i+1; j<arr.length; j++){
                    console.log(arr[j], 'j')

                    if(arr[i] + arr[j] <= target){
                        res.push(arr[i],arr[j])
                    }
                }
            }
            res.sort((a,b)=>a-b)
            return res;
    }
console.log(sumClosest([10, 30, 20, 5], 20))