const changeText =()=>{
    //fetch element by id
    const text = document.getElementById("text") //<h1>
    console.log(text.innerText)
    //replce
    text.innerText="HI"
    text.style.color="red"
}

const changeLinks = ()=>{
    const link = document.getElementById("link") //<a>...
    link.innerText="Netflix"
    link.href = "https://www.netflix.com"
    link.target ="_blank"
}

const changeShape =()=>{
    const box = document.getElementById("box")
    
    if(box.style.borderRadius == "0%")
    {
        box.style.borderRadius="50%"
        box.style.backgroundColor="red"
    }else
    {
        box.style.borderRadius="0%"
        box.style.backgroundColor="yellow"

    }

}