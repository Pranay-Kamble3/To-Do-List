const InputBox = document.getElementById("input-box");
const ToDoList = document.getElementById("todo-list");

function AddTask() {
    if (InputBox.value === "") {
        alert("You must write Something...!!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ToDoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u{1F5D1}';
        li.appendChild(span);
    }
    InputBox.value = "";
    saveData();
}

ToDoList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
     else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", ToDoList.innerHTML);
}

function showTask(){
    ToDoList.innerHTML = localStorage.getItem("data");
}
showTask();