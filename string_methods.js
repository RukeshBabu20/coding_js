const str = 'Hello word';

str.length

// ACCESSING CHARACTER
str[0]
str.charAt(0)

// CORE METHODS
str.toUpperCase(); //Convert to uppercase.
str.toLowerCase(); //Convert to lowercase.
str.trim(); //Remove whitespace from the beginning and end.
str.split(''); //Split the string into an array.

// SUBSTRING
str.slice(0,4)  //Extract a substring.
str.slice(4)  //Extract a substring.
str.slice(-6) //Extract a substring.
str.substring(0, 4)  //Extract a substring (similar to slice but doesn't accept negative indices).

// SEARCHING STRINGS
str.indexOf("o") // Find the index of the first occurrence of a substring.
str.lastIndexOf("h") //Find the index of the last occurrence of a substring.
str.includes("world") //Check if a substring exists in the string.
str.startsWith("hello") // Check if the string starts with a given substring.
str.endsWith("world") // Check if the string ends with a given substring.
str.search("world") // Search for a match and return the index.

// MANIPULATION STRINGS
str.replace("world", "Javascript") // Replace a substring with another string (first occurrence only).
str.replaceAll("world", "Javascript") // Replace all occurrences of a substring.
str.concat(", ", "world", "!") // Combine multiple strings.
str.repeat(3) // Repeat the string a specified number of times.
str.padStart(3, "0") // Add padding to the start of the string.
str.padEnd(3, "0") // Add padding to the end of the string.
