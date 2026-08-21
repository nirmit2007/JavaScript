const getData = () => {

    const box = document.getElementById("box")
    const color = ["red","blue","green","yellow","pink","black"]
    box.style.backgroundColor = color[Math.floor(Math.random()*10)]
}