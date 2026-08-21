const getData =() =>{
    const textout= document.getElementById("textoutput")
    const data = document.getElementById("data") //<input>
    console.log(data.value)
    textout.innerText = data.value
}
