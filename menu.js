var check = document.querySelector(".checkBtn");
var mobilMenu = document.querySelector("ul");
var wraper = document.querySelector("#wraper");
var open = document.querySelector("#open");

check.addEventListener("click",()=>{
    mobilMenu.style.left = 0;
    wraper.style.display = "none";
    open.style.display = "block";
})

function tap(){
    wraper.style.display = "block";
    mobilMenu.style.left = "-100%";
    open.style.display = "block";
    
}