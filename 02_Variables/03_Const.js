/*

    Const is a variable type which can't be redeclared .It is constant
    It is also not block scoped.We can't even re initialize the particular variable.....

*/

const a=5;

console.log(a)

// a=10

console.log(a)

{
    // a=10
    console.log(a)
}