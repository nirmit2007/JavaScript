var n = [1,2,3,4,5,6,7,8,9,10]

var oddArray = n.filter((i)=>
    {
        return i % 2 !== 0
    })
console.log(oddArray);

var users = ["aman","suman","nirmit"]

var name = users.filter((i)=> 
    {
        return i.length > 4
        return i.endsWith('it')
    })
console.log(name);



