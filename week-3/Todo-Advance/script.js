let todos =[];
function addTodo(){
    todos.push({
        title: document.querySelector('#todo-input').value,
    })
    render();
    document.querySelector('#todo-input').value = '';
}

function deleteTodo(){


    render();
}

function render(){
    const todo = document.createElement('h2');
    todo.innerText = todos[todos.length-1].title;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    const editButton = document.createElement('button');
    editButton.innerText = "Edit";
    todo.appendChild(deleteButton);
    todo.appendChild(editButton);  
    document.querySelector('#todo-list').appendChild(todo);
}