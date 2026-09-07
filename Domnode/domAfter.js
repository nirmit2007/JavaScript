const box1 = document.createElement("div") //<div></div>
box1.style.height="200px"
box1.style.width="200px"
box1.style.backgroundColor="red"
root.appendChild(box1)

const box2 = document.createElement("div") //<div></div>
box2.style.height="200px"
box2.style.width="200px"
box2.style.backgroundColor="yellow"
root.appendChild(box2)

box2.after(box1)