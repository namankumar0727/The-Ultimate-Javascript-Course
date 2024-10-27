/*

    Properties are the most important part of JavaScript objects.

    Properties can be changed, added, deleted, and some are read only.

*/

// const a={
//     name:"Naman Kumar",
//     age:19
// }

// console.log(a.name)
// console.log(a.age)
// console.log(a['age'])



//Now adding of the new properties in the a variable


// const b={
//     name:"Naman Kumar",
//     age:19
// }

// console.log(b.name)
// console.log(b.age)

// b.fullname="Hello world"
// console.log(b['fullname'])


//Now deleting of the properties

// const person={
//     firstName:"Naman",
//     lastName:"Kumar",
//     age:19,
//     eyecolor:"blue"
// }

// console.log(person)


// delete person.age

// console.log(person)

const myObj={
    name:"Naman",
    age:19,
    myCars:{
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}

console.log(myObj.myCars.car1)
console.log(myObj.myCars)