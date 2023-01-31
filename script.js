const addBtn = document.getElementById('add');
const todoElement = document.getElementById('todo');
const deadLineElement= document.getElementById('deadline')
const priorityElement= document.getElementById('priority')

const addTodoToLocalStorage =(todoList)=>{
localStorage.setItem('todoList', JSON.stringify(todoList))
}


const getTodoListFromLocalStorage=()=>{
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList = todoList ? todoList : [];

    return todoList;
}
const renderTodo = (todo, index, parentContainer)=>{
    //create a todo element
    const parentDiv = document.createElement('div')
    parentDiv.classList.add('flex')
const todoDiv = document.createElement('div')
todoDiv.textContent = todo.name;

const deadLine = document.createElement('input')
deadLine.type = 'date'
deadLine.value = new date(todo.deadLine)

const priority = document.createElement(div)
priority.textContent = todo.priority;

const btns = document.createElement('div')
const completedBtn = document.createElement('button')
const deletedBtn = document.createElement('button')

completedBtn.textContent = 'complete'
deletedBtn.textContent = 'delete'

completedBtn.id=index;
deletedBtn.ic=index;

btns.appendChild(completedBtn)
btns.appendChild(deletedbutton)

parentContainer.appendChild(todoDiv)
parentContainer.appendChild(deadLine)
parentContainer.appendChild(priority)
parentContainer.appendChild(btns)
//add it inside parentcontainer
}

const renderToDoItems = (containerId,todoList)=>{
    const todoItemContainer = document.getElementById('containerId')
   todoList.map((item, index) =>{
    renderTodo(item, todoItemContainer)
   });
}

const renderTodos=()=>{
    const todoList = getTodoListFromLocalStorage();
    const todatDate= new Date();
    const todayDate = todatDate.getDate();
    // todatDate.setTime(0,0,0);
    const todasTodo = todoList.filter(todo => {
         const deadLineDate = new Date(todo.deadLine);
        //  console.log("deadline check", deadLineDate, todaydate);
         return deadLineDate <= todayDate;
    });  
        //new Date (todo.deadline).getDate() <= todatDate);
    const futureTodo = todoList.filter(todo => new Date (todo.deadline).getDate() > todatDate);
    const completedTodo = todoList.filter(todo => todo.isCompleted);

    console.log("todo", todoList, todasTodo, futureDate, completedToday);
    
    renderToDoItems('today', todasTodo);
    renderToDoItems('future', todasTodo);
    renderToDoItems('past', todasTodo);
}

const addToDo =()=>{
const todo = todoElement.value;
const deadline = deadLineElement.value;
const priority = priorityElement.value;
const date = new Date(deadline)
console.log("todo", todo, priority, date);
const todoObj = {
    name : todo,
    deadLine : date,
    priority,
    isCompleted:false
}

const todoList = getTodoListFromLocalStorage();
todoList.push(todoObj);
addTodoToLocalStorage(todoList);
renderTodos();
}

addBtn.addEventListener('click', addToDo);