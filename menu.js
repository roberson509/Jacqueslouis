var check = document.querySelector(".checkBtn");


var mobilMenu = document.querySelector("ul");
    var about = document.querySelector("#aboutMe");
    var open = document.querySelector("#open");

check.addEventListener("click",()=>{
    
    mobilMenu.style.left = 0;
    about.style.display = "none";
    open.style.display = "none";
})


function tap(){
    about.style.display = "block";
    mobilMenu.style.left = "-100%";
    open.style.display = "block";
}