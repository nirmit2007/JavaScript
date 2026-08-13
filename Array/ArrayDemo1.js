var users = ["raj","parth","amit","sumit","jay"]

console.log(users);
console.log(users[0]);
console.log(users.length);

//iterate..

// for(let i=0;i<users.length;i++){
//     console.log(users[i])
// }

users.forEach((u)=>{
    console.log(u)
})


var x = users.push("kunal")
console.log(users)
console.log(x) //6

users.unshift("preeti")
console.log(users)


var removedelm = users.pop()
console.log("removing...",removedelm)
console.log(users)


var removedelm = users.shift()
console.log("removing...",removedelm)
console.log(users)