const doubleclik = document.getElementById("dclick");

doubleclik.addEventListener("dblclick",()=>{
//or , doubleclik.style.transform = "scale(1.3)";
doubleclik.classList.toggle("large");
});