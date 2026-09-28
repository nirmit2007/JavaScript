//zomato..
//search food.. --> 3 second
//add to cart --> 1 second
//payment --> 4 second
//delivery --> 1 second

// setTimeout(() => {
//     console.log("food has been searched pizza")
// }, 5000);

// setTimeout(() => {
//     console.log("pizza added to cart")
// }, 1000);

// setTimeout(() => {
//     console.log("payment done..")
// }, 4000);

// setTimeout(() => {
//     console.log("delivary partner has been assigned..")
// }, 1000);


const searchFood = ()=>{

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("food has been searched !!")
        }, 3000);
    })

    return promise
}
var x = searchFood() // x == promise object
console.log("x--->",x)

x.then((data)=>{
    console.log(data)
})




















