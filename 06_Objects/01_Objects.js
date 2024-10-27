/*
    
    Objects are the real life objects

*/

const a={
    firstname:"Naman",
    lastname:"Kumar",
    age:19
}

console.log(a.firstname)
console.log(a.lastname)
console.log(a.age)

a.favouritegame="BGMI"

console.log(a)


//We can also initialize an object with the help of new keyword

const b=new Object()

b.firstname="Naman"

console.log(b.firstname)

console.log(b['firstname'])



// ------------------------------------------------------------------------


//Objects in which we will use functions

const c={
    firstname:"Naman",
    lastname:"Kumar",
    age:20,
    work:function(){
        return this.firstname+" "+this.lastname+" "+this.age
    }
}

console.log(c)

console.log(c.work())

/*
In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects

Except primitives all are objects

these are the primitives

string
number
boolean
null
undefined
symbol
bigint


*/

