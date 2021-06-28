const countEl = document.getElementById("count-el");

count = 0;

function increment(){
    count++;
  countEl.innerHTML = count;
    // console.log(count)
}