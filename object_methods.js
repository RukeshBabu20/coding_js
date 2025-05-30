// CREATING OBJECT
const obj = {name:"rukesh", age:30}; // OBJECT LITERAL
const obj1 = new Object(); // OBJECT CONSTRUCTOR


// ADDING, UPDATING, DELETING
obj1.name = "babu" // Adding new property and value
obj1.name = "rukesh" // updating value to existing property
obj1.age = 45
delete obj.age

// ACCESSING PROPERTIES
obj.name
obj["age"]


// CORE OBJECT METHODS:

Object.keys(obj) // Get an array of the object's keys.
Object.values(obj) // Get an array of the object's values.

Object.entries(obj) // Get an array of key-value pairs.input - { name: "Alice", age: 25 } , -output [["name", "Alice"], ["age", 25]]
Object.fromEntries(entries) // Create an object from key-value pairs.input - [["name", "Alice"], ["age", 25]] , output - { name: "Alice", age: 25 }

Object.assign(obj, obj1) // Copy properties from one or more objects to a target object.
Object.freeze(obj); // Prevent modifications to an object.
Object.seal(obj); // Prevent adding or removing properties but allow modifying existing ones.

Object.is(25, 25) // Check if two values are the same.
obj.hasOwnProperty("name") // Check if a property exists in the object.


// ITERATION METHODS:

// FOR IN LOOP
for (let key in obj){
    console.log(key , obj[key])
}
// USING OBJECT.KEYS
Object.keys(obj).forEach(key=>{
    console.log(key, obj[key])
})

// ADVANCED METHODS:
const { name:myName, age } = obj; // Destructuring
const { name, ...rest } = obj; // Using Rest, Get remaining properties.
const clone = { ...obj }; // Clone objects.
const merged = { ...obj, age: 25 }; // merge objects.
JSON.stringify(obj1) === JSON.stringify(obj2); // compare two objects deeply
