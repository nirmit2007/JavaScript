window.addEventListener("DOMContentLoaded",()=>{
    alert("loaded..")
    const button = document.querySelector("#btn")
    console.log(button)
})

//resize:
window.addEventListener("resize",()=>{
    console.log(window.innerWidth)
    console.log(window.innerHeight)
})