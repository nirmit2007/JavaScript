var users = [["raj","parth"],["amit","sumit"]]

var filtuser = users.flatMap((i)=>i).filter((i)=>i.includes("a")).map((i)=>i.toUpperCase())
console.log(filtuser);