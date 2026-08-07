const ce=()=>
{
    console.log("ce called")
}
const ec=()=>
{
    console.log("ec called");
}

const admission=(cb)=>
{
    console.log("admission called...");
    cb()
}

var perc = 89

if(perc > 85)
{
    admission(ce)
}else if(perc > 75)
{
    admission(ec)
}else
{
    console.log("na mel pde");
}