// NRNA
function demo()
{
    console.log("demo function called...");
}
demo()

//NRWA
function display(a,b)
{
    console.log("display function called");
    console.log("a : ",a);
    console.log("b : ",b);
}
display(10) // b -> undefined
display(10,20)
display(10,20,30) // No error

//WRNA
function name()
{
    ans = "nirmit";
    return ans
}
name()
console.log("My name is ",ans);

//WRWA
function avg(a,b,c)
{
   ans = (a+b+c)/3
   return ans
}
avg(10,20,30)
console.log("Average = ",ans);
