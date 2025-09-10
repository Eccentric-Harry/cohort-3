function loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        return JSON.parse(savedTodos);
    } else {
        return [
            {id:1, task:'Learn HTML', completed: false}, 
            {id:2, task:'Learn CSS', completed: false}, 
            {id:3, task:'Learn JS', completed: false}
        ];
    }
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

let todos = loadTodos();
console.log(...todos);

function addTodo(){
    const value = document.querySelector('#todo-input').value;
    console.log(value);
    if(value.trim() === ''){
        alert('Please enter a todo item');
        return;
    }

    
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    
    todos.push({
        id: newId,
        task: value.trim(),
        completed: false
    })
    document.querySelector('#todo-input').value = '';
    console.log(todos);
    saveTodos();
    render();
}

function render(){
    const ul = document.querySelector('#todo-list');
    ul.innerHTML='';
    
    for(let i = 0; i < todos.length; i++){
        const todo = todos[i];
        const li = document.createElement('li');
        li.textContent = todo.task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = function(){
            todos.splice(i, 1);
            saveTodos();
            render();
        }
        
        const doneButton = document.createElement('button');
        doneButton.textContent = todo.completed ? 'Mark Incomplete' : 'Mark Done';
        doneButton.style.marginLeft = '10px';
        doneButton.onclick = function(){
            todo.completed = !todo.completed;
            saveTodos();
            render();
        }
        
  
        if(todo.completed){
            li.style.textDecoration = 'line-through';
            li.style.color = 'green';
        }
        
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        ul.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    render();
});
