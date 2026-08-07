/* const hdfc=()=>
{
    console.log("Transaction of " ,amt, " Done from HDFC Bank.");
}
const sbi=()=>
{
    console.log("Transaction of " ,amt, " Done from SBI Bank.");
}
const upi=(cb,amt)=>
{
    console.log("UPI Called...");
    cb(amt);
}

var amt = 10000
upi(sbi,amt) */

const hdfc=(amt)=>
{
    console.log("Transaction of " ,amt, " Done from HDFC Bank.");
    return amt * 1.1;
}
const sbi=(amt)=>
{
    console.log("Transaction of " ,amt, " Done from SBI Bank.");
    return amt * 1.2;
}
const upi=(cb,amt)=>
{
    console.log("UPI Called...");
    
    var trans = cb(amt)
    console.log("Total Amount of Transaction = ",trans);
}

var amt = 10000
upi(sbi,amt)

