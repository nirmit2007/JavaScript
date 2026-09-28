const searchProduct = () => {

    console.log("Searching for product...")

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                name: "Headphones",
                price: 2000
            })
        }, 3000)

    })

    return promise
}


const makePayment = (amount) => {

    console.log("Payment is processing...")

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                amount: amount,
                status: "Payment Successful"
            })
        }, 4000)

    })

    return promise
}


const placeOrder = (product) => {

    console.log("Placing order...")

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                product: product.name,
                orderId: 12345,
                status: "Order Placed"
            })
        }, 3000)

    })

    return promise
}


const amazon = () => {

    console.log("Welcome to Amazon")

    // Step 1: Search product
    const product = searchProduct()

    product.then((data) => {

        console.log("Product:", data)

        // Step 2: Payment
        const payment = makePayment(data.price)

        payment.then((paymentData) => {

            console.log("Payment:", paymentData)

            // Step 3: Place order
            const order = placeOrder(data)

            order.then((orderData) => {

                console.log("Order:", orderData)

            })

        })

    })

}


amazon()