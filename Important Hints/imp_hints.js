// Count the occurence in object format ( use for string / array )
let res = {}

for (const char of str){
    res[char] = (res[char] || 0) + 1
}

// Maximum and minimum keys based on values
const max = Math.max(...Object.values(res));
const min = Math.min(...Object.values(res));

// Filter object based on values -- can use find, filter, all array methods
Object.keys(res).filter((item)=> res[item] === 1)

// Removes one or more spaces in given string.
str.split(/\s+/).reverse().join(' ');

// Compare two array
JSON.stringify(arr1) === JSON.stringify(arr2);
