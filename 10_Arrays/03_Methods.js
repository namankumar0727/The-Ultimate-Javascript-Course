//Array methods

const a=[1,23,1,131]

console.log(a.length)

const a1=a.toString()

console.log(typeof a1)

console.log(a1)

//Push and pop are used for pushing and removing the element from the array

//Shift () method removes the first element of the array and shifts all the elements to the lower index of the array

const fruits=["Banana","Apple","Mango"]

fruits.shift()

console.log(fruits)

fruits.unshift("lemon")

console.log(fruits)

//we can chnage the element at the particular index by acessing it

//Merge the arrays with the help of concat

//Splice

// The splice() method can be used to add new items to an array

const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
fruit1.splice(2,0,"Lemon","Kiwi");

console.log(fruit1)


// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The slice() method slices out a piece of an array into a new array:

// Slice out a part of an array starting from array element 1 ("Orange"):

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1);

console.log(citrus)