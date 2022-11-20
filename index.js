let addbtn = document.querySelector(".addButton");
let todolist = document.querySelector(".container");

addbtn.addEventListener("click", addTodo);

function addTodo() {
    let todo = document.createElement("div");

    let todotxt = document.createElement("p");
    todotxt.innerText = document.querySelector(".input").value;
    todotxt.className = "item_input"
    todo.appendChild(todotxt);

    let editbtn = document.createElement("button")
    editbtn.innerText = "Edit"
    editbtn.setAttribute ("onclick", "editTodo(this)")
    editbtn.className = "editButton"
    todo.appendChild(editbtn)

    let delbtn = document.createElement("button")
    delbtn.innerText = "Del"
    delbtn.setAttribute ("onclick", "delTodo(this)")
    delbtn.className = "deleteButton"
    todo.appendChild(delbtn)

    todo.className = "item"
    todolist.appendChild(todo)
    console.log(todolist)
}

function delTodo(val) {
    let parent = val.parentNode;
    parent.remove();
}

function editTodo(val) {
    let newTxt = prompt("Enter updated note");
    let parent = val.parentNode;
    parent.querySelector("p").innerText = newTxt;
}