//Methods are the functions inside the objects

const person={
    firstName:"Naman",
    lastName:"Kumar",
    age:19,
    fullname:function(){
        return this.firstName+" "+this.lastName+" "+this.age
    }
}

console.log(person.fullname())