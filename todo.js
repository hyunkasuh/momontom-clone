const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"

let toDos = []; // array

function filterFn(toDo) {
    return toDo.id === 1;
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    // filter: array's function. Run the filterFn for every items, 
    //and return new array only with the item that meets the condition in filterFn.
    toDos = cleanToDos;
    saveToDo();
}
function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //because... local storage stores the data as strings.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "□";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const savedToDos = localStorage.getItem(TODOS_LS);
    if (savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos);
        // Parsing means that he understands it!
        parsedToDos.forEach(function(toDos) {
            paintToDo(toDos.text);
        });
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
