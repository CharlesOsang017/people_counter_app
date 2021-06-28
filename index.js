const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

count = 0;
function increment(){
    count++;
  countEl.innerHTML = count;

}

function save(){
  let saveStr = count + " - ";
  saveEl.innerHTML += saveStr;

}
