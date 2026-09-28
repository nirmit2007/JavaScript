const searchFood = ()=>{

    console.log("searching food...")

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name:"pizza",price:300})
        }, 3000);
    })

    return promise
}

const payment = (amount)=>{

    console.log("payment has been processing...")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({amount:amount,status:"success"})
        }, 4000);
    })
    return promise
}

const zomato = ()=>{


    console.log("welcome to zomato")
    const food = searchFood() // food == promise
    //console.log(food)
    food.then((dish)=>{
        console.log("dish ",dish)
        //payment -->
        const pay = payment(dish.price) //pay == promise
        pay.then((paymentdata)=>{
            console.log("payment data",paymentdata)
        })
    })

}

zomato()