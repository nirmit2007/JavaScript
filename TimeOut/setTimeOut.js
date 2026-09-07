console.log("first")
setTimeout(()=>{
    console.log("after 3 second...")
},3000)

var count =0
var id = setInterval(()=>{
    count++
    console.log("count ",count)

    if(count==10){
        clearInterval(id)
    }
},100)