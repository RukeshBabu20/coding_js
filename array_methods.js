// CORE ARRAY METHODS:
const coreArr = [1,2,3,4,5,6,7,8];
coreArr.push(4); //Adds element to the end
coreArr.pop();  // Removes element to the end.
coreArr.shift(); // Remove and return first element.
coreArr.unshift(1); // Add elements to the start of the array.
coreArr.splice(1,2,30,40) // Modify the origianl array ( add / remove / replace elements)
coreArr.slice(1,3) // Export a portion of array wihtout modifying the original array.

// ITERATION METHODS:
const iterationArr = [1,2,3,4,5]

iterationArr.forEach(item => console.log(item * 2)) //Execute a function for each array element.
iterationArr.map(item => console.log(item * 2)) //Create a new array by applying a function to each element.
iterationArr.filter(item =>  item % 2 === 0) //Create a new array with elements that satisfy a condition.
iterationArr.reduce((acc, cur) => acc + cur , 0) //Reduce the array to a single value.

iterationArr.some(item => item * 2 === 0); // Check if at least one element satisfies a condition.
iterationArr.every(item => item % 2 === 0); // Check if all elements satisfy a condition.
iterationArr.find(item => item % 2 === 0); // Return the first element that satisfies a condition.
iterationArr.findIndex(item => item % 2 === 0) // Return the index of the first element that satisfies a condition.

// SORTING ARRAY:

const sortArrNum = [3,4,1,2];
const sortArrStr = ["fruits", "apple", "banana"];
sortArrNum.sort((a,b)=>a-b) // sort the numbers
sortArrStr.sort() // sort the array
sortArrNum.reverse() // reverse the numbers
sortArrStr.reverse() // Reverse the elements of string


sortArrNum.sort((a, b) => a - b);
console.log("Numbers sorted in ascending order:", sortArrNum);

// Sort strings in lexicographical order
sortArrStr.sort();
console.log("Strings sorted in lexicographical order:", sortArrStr);

// Reverse numbers
sortArrNum.reverse();
console.log("Numbers reversed:", sortArrNum);

// Reverse strings
sortArrStr.reverse();
console.log("Strings reversed:", sortArrStr);

// SEARCHING ARRAY:
const searchArr = [1,2,3,2]
searchArr.indexOf(2); // Find the first index of a specific value.
searchArr.lastIndexOf(2); // Find the last index of a specific value.
searchArr.includes(2) // Check if an element exists in the array.


// UTILITIY METHODS:
const utilarr1 = [1,2]
const utilarr2 = [3,4]
const utilarr3 = [5,6]
const nestedarr = [[1,2],[3,4],[5,6]]
const nestedarrinfinity = [1,[2,[3,4,[5]]]]
const fromstr = "hello"

utilarr1.concat(utilarr2, utilarr3) // Merge two or more arrays
utilarr1.join(',') // Convert the array into a string with a specified separator.
nestedarr.flat() // Flatten nested arrays in first level.
nestedarrinfinity.flat(Infinity) // Flatten nested arrays.

Array.from(fromstr) // Create an array from an iterable or array-like object from string.
Array.isArray([utilarr1]) // Checks if a values is an array.

// SET METHODS:
const setarr = [1,2,3,4]
const setAsArray = [...new Set(setarr)] // returns array with unique elements
const setAsSetObject = new Set(setarr) // return set object with unique elements
