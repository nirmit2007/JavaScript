const payment =()=>{

    console.log("payment has been processing..")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({message:"payment success",amount:1000})
            //reject({message:"payment failed",amount:1000})
        }, 3000);
    })
    
    return promise
}

const genReceipt = (amount)=>{

    console.log("generating receipt...")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve({message:"ok",amount:amount})
        }, 4000);
    })
    return promise
}


const phonepe = async()=>{


    const pay = await payment()
    console.log(pay) //pending..
    const rec = await genReceipt(pay.amount)
    console.log(rec)

    const t  =  test()
    console.log(t)


}


phonepe()