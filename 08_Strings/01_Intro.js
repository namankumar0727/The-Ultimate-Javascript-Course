const a="Naman Kumar"

const a1=`Naman kumar`

//We can write the string with single quote with the double quote anything and if we want to use the single quote or the double quote inside the string then we can use the tilt (`)

console.log(a.length)

const a2=`Naman is a boy with "5 dollars" in his pocket  `

console.log(a2)

// const a3="dv
// satisfiesv
// satisfiess
// vs"

// console.log(a3)

// const a4=`ds
// s

// vs
// vs
// `

// console.log(a4)

    /*

    \'	'	Single quote
    \"	"	Double quote
    \\	\	Backslash
    \b	Backspace
    \f	Form Feed
    \n	New Line
    \r	Carriage Return
    \t	Horizontal Tabulator
    \v	Vertical Tabulator

*/

//Js string as objects

let x="Naman"

let y=new String("Kumar")

console.log(typeof x)
console.log(typeof y)

/*
    Do not create Strings objects.

    The new keyword complicates the code and slows down execution speed.

    String objects can produce unexpected results
*/

const x1="Naman"

const x2="Kumar"

console.log(x1==x2)
console.log(x1===x2)