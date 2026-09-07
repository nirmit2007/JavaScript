const root = document.getElementById("root")

const h1tag = document.createElement("h1")
h1tag.innerHTML = "one"
root.appendChild(h1tag)

const h2tag  = document.createElement("h2")
h2tag.innerHTML="two"
h1tag.before(h2tag)

const h3tag = document.createElement("h3")
h3tag.innerHTML = "three"

h2tag.before(h3tag)