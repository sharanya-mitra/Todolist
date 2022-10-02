const errorMsg = document.querySelector(".err-msg");
const todotInput = document.querySelector(".todoInput");
const editInput = document.querySelector(".editInput");
const addbtn = document.querySelector(".btn");
const editbtn = document.getElementById("editBtn");
const todos = document.querySelector(".todos");
const editForm = document.getElementById("editForm");
const addForm = document.getElementById("addForm");

addbtn.addEventListener("click", addMe);
todos.addEventListener("click",deleteCheck);

function addMe(e) {
  e.preventDefault();
  //console.log("goat")
  if (todotInput.value == "") {
    errorMsg.style.display = "block";
    setTimeout(() => {
      errorMsg.style.display = "none";
    }, 1000);
  } else {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");

    let list = document.createElement("li");
    list.innerHTML = todotInput.value;
    list.classList.toggle("fish");

    todoDiv.appendChild(list);

    // let editForm = document.createElement("form");
    // editForm.style.display="flex";


    let done = document.createElement("button");
    done.innerHTML = "<img src = './images/check.png' >";
    done.classList.add("done");

    todoDiv.appendChild(done);

    let trash = document.createElement("button");
    trash.innerHTML = "<img src = './images/trash1.png'>";
    trash.classList.add("trash");
    todoDiv.appendChild(trash);

    let edit = document.createElement("button");
    edit.innerHTML = "<img src='./images/edit.png' height='25px' width='25px'/>";
    edit.classList.add("edit");
    todoDiv.appendChild(edit);

    todos.appendChild(todoDiv);

    todotInput.value = "";
  }
}

function deleteCheck(e) {
  
  if (e.target.classList[0] === "trash") {
    let move = e.target.parentElement;
    
    move.classList.add("fall");
    todos.addEventListener("transitionend", () => {
      move.remove();
    });
  }
  
  if (e.target.classList[0] === "done") {
    let open = e.target.parentElement;
    open.classList.toggle("completed");
  }
  
  if (e.target.classList[0] === "edit") {
    let open = e.target.parentElement;
    open.classList.add('beingEdited');
    addForm.classList.add('invisible');
    editForm.classList.remove('invisible');
    editbtn.addEventListener('click',()=>{
      if (editInput.value == "") {
        errorMsg.style.display = "block";
        setTimeout(() => {
          errorMsg.style.display = "none";
        }, 1000);
      }
      else{
        open.classList.remove('beingEdited');
        addForm.classList.remove('invisible');
        editForm.classList.add('invisible');
        open.getElementsByClassName('fish')[0].innerHTML = editInput.value;
      }
    })
  }
}

function dark(){
 var elem= document.body;
elem.classList.toggle("dark-mode")
}