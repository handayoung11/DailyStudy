const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector('.js-toDoList');
    
const TODOS_LS = 'toDos';
let toDos=[];

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement('button');
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = 'X';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    const toDoObj = {
        text: text,
        id: newId
    };
    toDoList.appendChild(li);
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value='';
}
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(toDo => {
            paintToDo(toDo.text);
        });
    }
}

function deleteToDo(event) {
    const li = event.target.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(toDo => {
        return toDo.id != li.id;
    });
    toDos = cleanToDos;
    saveToDos();
}

init();