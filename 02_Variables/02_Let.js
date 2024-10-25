/*

    Let is a variable which is used to block scoped 
    we can re instialize it but we can't redeclare it within the same scope

*/


let a=5;
console.log(a)
{
    let a=10
    console.log(a)
}

// let a=15

console.log(a)