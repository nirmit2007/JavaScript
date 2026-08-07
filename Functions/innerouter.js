const outer=()=>
{
    console.log("Inner Function Called...");
    const inner=()=>
    {
        console.log("Inner Function Called...");
    }
}

var x = outer()
x()