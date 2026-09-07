const root = document.getElementById("root") //<div>

const h1tag1 = document.createElement("h1") //<h1></h1>
h1tag1.innerText="hi this is from js"
root.appendChild(h1tag1)


const googlelink = document.createElement("a")
googlelink.href = "https://www.google.com"
googlelink.innerText = "Google"

root.appendChild(googlelink)

const box1 = document.createElement("div") //<div></div>
box1.style.height="200px"
box1.style.width="200px"
box1.style.backgroundColor="red"
root.appendChild(box1)

const mybtn = document.createElement("button") //<button></button>
mybtn.innerText="click"
root.appendChild(mybtn)

mybtn.addEventListener("click",()=>{
    alert("cliked..")
})

const circle = document.createElement("div")
circle.style.height="100px"
circle.style.width="100px"
circle.style.backgroundColor="blue"
circle.style.borderRadius="50%"
root.appendChild(circle)