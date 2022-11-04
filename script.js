let hiddenList = document.getElementById('createListName');
let addButton = document.getElementById('addList');
let listHeader = document.getElementById('listName');
let createListName = document.getElementById('unorderedList');
let createNewList = document.getElementById('createList');
let dynamicList = document.getElementById('dynamicList');

let listOfTodoLists = [];
let currentTaskListId = null;

function getRandomId() {
    return `${new Date().getTime()}`;
}
function getCurrentTaskList() {
    return listOfTodoLists.find(list => list.id === currentTaskListId);
}
function selectList(listNameSelected) {
    currentTaskListId = listNameSelected.getAttribute('data-todo-list-id')
}
function listHeaderName() {
    const id = getRandomId()
    const textValue = document.getElementById('createListName').value;
    listHeader.innerText = textValue;
    unorderedList.innerHTML += `<li id="dynamicList" onclick="selectList(this)" data-todo-list-id=${id}>${textValue}<button id="deleteList"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg></button></li>`;

    const close = document.querySelectorAll('#deleteList');
    for (let i = 0; i < close.length; i++){
        close[i].addEventListener('click', (e)=>{
                            // update state
            listOfTodoLists = listOfTodoLists.filter(l => {
                return l.id !== currentTaskListId;
            })

            console.log('listOfTodoLists', listOfTodoLists)
            close[i].parentElement.remove();
        })
    };

    // update the 'state'

    listOfTodoLists.push({
        id,
        name: textValue,
        todos: []
    })
    currentTaskListId = id;
    console.log(listOfTodoLists);

    // function save() {
    //     let sideBar = document.getElementById('sideBar');
    //     window.localStorage.setItem('sideBar', sideBar);
    //     console.log(sideBar);
    // }
    // function retrieve() {
    //    let sideBarData = window.localStorage.getItem('sideBar');
    //    sideBarData.innerHTML = sideBar;
    //    console.log(sideBarData);
    // }
    // save();
    // retrieve();
}
function addNewTask() {
    const id = getRandomId();
    const text = document.querySelector('#goal')
    let start = document.getElementById('taskListStart');
    start.innerHTML += `<li><input id="completed" type="checkbox"><input  data-todo-item="${id}" id="newTaskInput" maxlength="75" type="text" onchange="newTaskName(this)" placeholder="Add a New Task"></input><button id="delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
    </svg></button></li>`;
    const close = document.querySelectorAll('#delete');
    for (let i =0; i<close.length; i++){
        close[i].addEventListener('click', (e)=>{
            close[i].parentElement.remove();
        })
    };
    
    const currentTaskList = getCurrentTaskList();
    if(currentTaskList) {
        currentTaskList.todos.push({
            id, 
            text,
            completed: false 
        })
    }
}
function newTaskName(item){
    let task = item;
    let taskValue = item.value
    let goal = document.createElement('p');
    goal.id="goal";
    goal.title="Double Click to Rename";
    goal.addEventListener('dblclick', ()=> {
        let start = document.createElement('li');
        start.innerHTML = `<input id="completed" type="checkbox"><input id="newTaskInput" type="text" onchange="newTaskName(this)" placeholder="Add a New Task"></input><button id="delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg></button>`;
      goal.parentElement.replaceWith(start);

      const close = document.querySelectorAll('#delete');
      for (let i =0; i<close.length; i++){
          close[i].addEventListener('click', ()=>{
            close[i].parentElement.remove();
                          // update state
          })
      };  
    });

    goal.innerText = taskValue;
    task.replaceWith(goal);
    goal.style.display="block";  
}