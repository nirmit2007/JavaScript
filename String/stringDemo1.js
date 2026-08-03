//string is iterable
//string is sup..
//string stores data in index
//string is immutbale.

var data = "India"
console.log(data)

// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])

//length string

console.log( data.length)

for(let i=0;i<data.length;i++){
    console.log(data[i])
}

data[0]="i" //immutable..
console.log(data)

var x  = data.charCodeAt(4) //india 4 is index --> india a --> 97
console.log(x)

//number char  65-->A
var x = String.fromCharCode(65)
console.log(x)


//concat op with string.. + op
var fistName = "amit"
var lastName = "shah"

var fullName = fistName + " "+ lastName
console.log(fullName)

//copy string..

var ogdata = "ahmedabad"
var dupdata="";

// dupdata = ogdata
// console.log(dupdata)

//copy  by 1 char

for(let i=0;i<ogdata.length;i++){

    dupdata+=ogdata[i];
}
console.log(dupdata)


//task

data = "ahmedabad" // 

//op : new variable
//upperdata = "AHMEDABAD"





