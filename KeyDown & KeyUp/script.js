const container = document.getElementById("display");

container.addEventListener("keyup", function (e){
    container.innerText = e.key +" is key up";
})

container.addEventListener("keydown",function (e){
    container.innerText = e.key + " is keydown";
})