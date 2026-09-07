const root= document.getElementById("root")

var users = ["amit","sumit","raj","parth","jay","kunal"]

for(let i=0;i<users.length;i++)
{
    var usertag = document.createElement("h1") //<h1></h1>
    usertag.innerText=users[i]
    root.appendChild(usertag)
}