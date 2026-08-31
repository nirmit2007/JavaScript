const getData = () =>
{
    // const text = document.getElementById("text") 
    // console.log(text)

    //for id use #idname
    const text = document.querySelector("#text")
    console.log(text)

    const namedata = document.querySelector("[name=data]")
    console.log(namedata)

    //document.getElementsByName("data") [] array

    const allnames = document.querySelectorAll("[name=data]")
    console.log(allnames)

    //for class .
    const firstBox = document.querySelector(".box")
    console.log(firstBox)

    const allboxes = document.querySelectorAll(".box")
    console.log(allboxes)

    const alldiv = document.querySelectorAll("div")
    console.log(alldiv)
}