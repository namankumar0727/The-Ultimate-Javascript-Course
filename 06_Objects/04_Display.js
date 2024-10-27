//Displaying the properties with the help of name

const person={
    firstName:"Naman",
    lastName:"Kumar",
    age:19
}

console.log(person.firstName)

//Displaying the properties in a loop

for(let data in person){
    console.log(data)
}


//Using the Object values

console.log(Object.values(person))

//using the Object entries

for(let [prop,type] of Object.entries(person)){
    console.log(prop+" "+type)
}

//Using the JSON.stringify()

console.log(JSON.stringify(person))