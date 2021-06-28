const countEl = document.getElementById("count-el");

count = 0;
function increment(){
    count++;
  countEl.innerHTML = count;

}

function save(){
    console.log(count)
}
