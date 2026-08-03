var data = "nirmit chaudhari"
var upperdata = ""

for(let i=0;i<data.length;i++)
{
    upperdata += String.fromCharCode(data.charCodeAt(i)-32)
}
console.log(upperdata);