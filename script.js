const me = document.getElementById("mune")
const action = document.getElementById("action")
me.addEventListener("click",()=>{
   hundlemune();
})


function hundlemune(){
    
  me.classList.toggle("is-active");
  action.classList.toggle("is-active");
}