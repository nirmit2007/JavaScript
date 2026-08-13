var users = ["raj","parth","amit","sumit","jay"]
console.log(users)

//var upperuser = []

// for(let i=0;i<users.length;i++){
//     //console.log(users[i])
//     upperuser.push(users[i].toUpperCase())
// }

//foreach
// users.forEach((u)=>{
//     console.log(u)
// })

//..map

var upperuser = users.map((u)=>{
    return u.toUpperCase()  // upperuser.push(users[i].toUpperCase())
})
console.log("upper user..",upperuser)



//map

var sales = [100,200,300,400,500]

var salesprofit = sales.map((s)=>{
    return s *1.1 //push
})
console.log(salesprofit)