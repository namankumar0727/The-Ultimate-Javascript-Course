//These are basic string methods

/*
String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()

The at() method is a new addition to JavaScript.

It allows the use of negative indexes while charAt() do not.

*/

const a="Namankumar"

console.log(a.at(4))


console.log(a.charAt(4))
/*
    slice(start, end) //end not included
    substring(start, end)
    substr(start, length)

*/

console.log(a.slice(3,5))
console.log(a.substring(3,5))

// If a parameter is negative, the position is counted from the end of the string:

let text = "Apple, Banana, Kiwi";
console.log(text.substring(3,5));

let part = text.slice(-12);
console.log(part)


//To uppercase

let a1="Naman Kumar"

console.log(a1.toUpperCase())

//To LowerCase

console.log(a1.toLowerCase())

//Trim reduces the extra space inside the string

console.log(a.trim())

//concat add the two strings ( we can also add the two string using the _ operator )

console.log(a1.concat("sivbsvs")+" ",a+"sivbsvs")

//Trim start and trim end trims the extra space from the string from the starting and the ending of the string repectively

//Padstart

//padstart method pads a string from the start

let value="1";

console.log(value.padStart(4)+"5")
console.log(value.padEnd(4)+"5")

//Now whatever character we want we can pad it

let numb="5";

console.log(numb.padStart(5,"N"))

//Repeat copies the text

let ans1="I am the king"

console.log(ans1.repeat(5))

// __.repeat(count)

//Now replacing the string content

let ans2="Naman kumar"

let ans3=ans2.replace("Naman","Aman")

console.log(ans3)

//Now if now apply the same method to two words in the same string the replace will work only for the first one .It is also very much case sensitive

//TO replace the case sensitivity we use the /i

let ans4="Hello my name is Naman Kumar"

let ans5=ans4.replace(/hello/i,"hi")

console.log(ans5)

//now to replace all the matches in the string use the /g

let ans6="Naman Kumar is a good boy"

let ans7=ans6.replace(/Naman/g,"Aman")

console.log(ans7)

//Replace all can also be used

// split 

// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe