let loadbar = document.querySelector(".loading-child");
let button = document.querySelector("button")

let width = 0;

    function loading () {
       
   
    if(width < 100){
        width++
    }        
    loadbar.style.width = `${width}%`;

    }
   
    button.addEventListener("click", setInterval(loading,  10))

