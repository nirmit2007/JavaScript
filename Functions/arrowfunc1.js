// Arrow Function

const dataType = (num) => typeof num === "number" ? true : false;

console.log(dataType(10));      
console.log(dataType(10.5));    
console.log(dataType(-7));      
console.log(dataType("10")); 

const checkLen = (a,b) => a.length + b.length >= 10 ? true : false;
console.log(checkLen("abcd","sdgfhjmvbn"))

const checkLen2 = (a,b) => a.length > b.length ? true : false;
console.log(checkLen2("abcd","sdgfhjmvbn"))

const checkNum = (a) => a==0 ? console.log("Num = 0") :  console.log("Num = ",a);
checkNum(0)
checkNum(1)
checkNum(2)

