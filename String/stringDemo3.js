var data = "nirmit chaudhari"

var i = data.indexOf("i",6)
var lastindex = data.lastIndexOf("i")
console.log(i)
console.log(lastindex)

console.log(data.at(7))
console.log(data.startsWith("ni"))
console.log(data.endsWith("ri"))


var email = "  abc123@gmail.com"
console.log(email.length);
console.log(email.trimEnd());
console.log(email.trim());

//console.log(email.toUpperCase());

console.log(email.search("@"));
console.log(email.valueOf()); // copy
console.log(email.includes("k"));

var x = "khushi"
console.log(x.slice(1,4)); // it excludes 4
console.log(x.substr(1,3)); // it include 3 
