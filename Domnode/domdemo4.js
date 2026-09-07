var users = ["amit","sumit","raj","parth","jay","kunal"]

for(let i=0;i<users.length;i++)
{
    var usertag = document.createElement("h1") //<h1></h1>
    usertag.innerText=users[i]
    root.appendChild(usertag)
}

const mybtn = document.createElement("button") //<button></button>
mybtn.innerText="click"
root.appendChild(mybtn)

mybtn.onclick = function()
{
    var num = Math.floor(Math.random() * 100);

    var h1 = document.createElement("h1");
    h1.innerText = num;

    root.appendChild(h1);
}