const ranomColorGeenrator =()=>{
    return "#"+Math.floor(Math.random()*16777215).toString(16)
}

window.addEventListener("DOMContentLoaded",()=>{
    const box = document.getElementsByClassName("box")[0]
    window.addEventListener("scroll",()=>{
        box.style.backgroundColor = ranomColorGeenrator()
    })
})