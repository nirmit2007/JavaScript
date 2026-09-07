const box = document.getElementById("box")
box.addEventListener("dblclick",()=>{
    box.remove()
})


const list = document.getElementById("list")
console.log(list.children) //li,li,li

const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{

    for(let i = 0; i < list.children.length; i++)
    {
        setTimeout(() => {
            list.children[0].remove();
        }, i * 1000);
    }
})