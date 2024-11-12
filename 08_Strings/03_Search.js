//indexof returns the exack pos of the word

let a="pleace locate the particular area"

console.log(a.indexOf("locate"))

//last index of return the last index of ocurring of the word

//search searches the word

let b="please locate the particular area"
console.log(b.search("locate"))


//match returns the word where it match

let c="The rain in spain stays mainly in the plain"

console.log(c.match("ain"))

//includes returns true if it is present in the string otherwise it returns false

let d="Naman is a good boy"

console.log(d.includes("is"))

console.log(d.includes("is",10))

//The second one  gives the output as false becuase it has started its searching from the position 10

//startswith and endswith

//they both does the same work as their name

// Check if the 11 first characters of a string ends with "world":

let text = "Hello world, welcome to the universe.";
console.log(text.endsWith("world", 11));