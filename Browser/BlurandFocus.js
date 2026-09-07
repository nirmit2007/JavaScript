window.addEventListener("DOMContentLoaded", () => {
    let count1 = 0
    let count2 = 0
  const msg = document.getElementById("msg");
  window.addEventListener("blur", () => {
    alert("user left..")
    count1++
  });
  window.addEventListener("focus",()=>{
    alert("welcome back")
    count2++
  })
});