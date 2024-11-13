//Array is a collection of items of similar types

const a=[1,2,2,124,12]

console.log(a)
console.log(typeof a)

//Array is also a type of object

//Accessing an element in the array

console.log(a[9]) //Now becuase i have given the value of index more than the size of the array that is why it is  giving me the value as undefined

//we can store the strings and numbers along in a same array

const a1=[1,2,3,"a","b"]

console.log(a1)

//we can also create an array inside the array

const a2=[1,2,3,4,[11,12,13,14]];

console.log(a2[4][1])

//length

console.log(a2.length)

// Looping through the array elements

for(let i=0;i<a1.length;i++){
    console.log(a1[i])
}

//push is used to add the array element

a1.push(3)


for(let i=0;i<a1.length;i++){
    console.log(a1[i])
}

//Now as we can see there is 3 added at the last of the array

//we can also create an array using the keyword new Array

const ans=new Array(1,341,4,1,1,41)

console.log(ans)

//but if we write it as

const ans2=new Array(40)

//it is not creating an array of size 1 in which there is a 40 number but an array of size 40


//TO check whether the array is an array or not

console.log(Array.isArray(ans))


