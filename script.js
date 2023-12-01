const input = document.getElementById("task");
const list = document.getElementById("list");
const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    if(input.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value='';
    saveData();
})

list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    e.target.classList.toggle("done");
    saveData();
  }else if(e.target.matches("span")) {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showData(){
    list.innerHTML= localStorage.getItem("data");
}
showData();