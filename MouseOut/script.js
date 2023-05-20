const ul = document.getElementById("ultag");
const lists = document.getElementById("test1");
const lists2 = document.getElementById("test2");
const lists3 = document.getElementById("test3");

lists.addEventListener("mouseout",func)
function func(){
    lists.style.background = "yellow";
    lists2.style.background = "green";
    lists3.style.background = "blue";
    ul.style.color = "red";
    lists.style.fontSize = "35px";
   
}