const keypressbtn = document.getElementById("button");
const inputdata = document.getElementById("inputdata")

inputdata.addEventListener("keypress",onkeypres)
function onkeypres()
{
  inputdata.style.backgroundColor = "green";
}
