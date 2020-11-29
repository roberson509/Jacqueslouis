  
var tag = document.getElementById('sandwich');
tag.addEventListener('click', ()=>{
    open();
})

function open(){
        var ul = document.querySelector('ul');
        var belly = document.getElementById('wraper');
        var check = document.getElementById('check');
        if(check.checked){
         ul.style.left = "-100%"; 
         belly.style.display = "block";
        }
        else{
            ul.style.left = 0; 
            belly.style.display = "none";
        }
}