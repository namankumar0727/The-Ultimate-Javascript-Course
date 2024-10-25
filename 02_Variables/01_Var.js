/*
    
    variables are the containers for storing of the data

    We can store any type of data in these variables it may be any number or may be string or may be character or objects

    There are three types of declaration of variables

    ->Let
    ->Var
    ->Const

*/

//For Example

var a=6;

console.log(a)

/*
    It is always a better approach to declare the variables before the usage of that particular variable
*/
b=6;
console.log(b)
var b


//We can declare the var later on due to the hoisting in which the all the var comes in the starting of the code while execution

{
    var c=5
}

console.log(c)

//It is  a type of global variable we can easily access it anywhere

var d=5;

console.log(d)

{
    var d=7

    console.log(d)
}

console.log(d)

var d=8;

console.log(d)