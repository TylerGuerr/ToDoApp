let hiddenList = document.getElementById('createListName');
let addButton = document.getElementById('addList');
let listHeader = document.getElementById('listName');
let createListName = document.getElementById('unorderedList');
let createNewList = document.getElementById('createList');
let dynamicList = document.getElementById('dynamicList');


function showListInput() {
    let showList = hiddenList.style.display="inline";
    let hideAddButton = addButton.style.display="none";
}
function listHeaderName() {
    let textValue = document.getElementById('createListName').value;
    listHeader.innerText = textValue;
    unorderedList.innerHTML += `<li id="dynamicList">${textValue}<button id="deleteList"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg></button></li>`;

    const close = document.querySelectorAll('#deleteList');
    for (let i =0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.display="none";
        })
    };
}
function addNewTask() {
    let start = document.getElementById('taskListStart');
    start.innerHTML += `<li><input id="completed" type="checkbox"><input id="newTaskInput" type="text" onchange="newTaskName()" placeholder="Add a New Task"></input><p id="goal"></p><button id="delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                    </svg></button></li>`;
    const close = document.querySelectorAll('#delete');
    for (let i =0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.display="none";
        })
    };
}
function newTaskName(){
    let task = document.getElementById('newTaskInput');
    let taskValue=task.value;
    let goal = document.getElementById('goal');
    goal.innerText = taskValue;
    goal.style.display = "block";
    task.style.display = "none";
}

