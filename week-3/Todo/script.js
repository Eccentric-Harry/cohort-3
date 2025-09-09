let count = 0;
function addTodo(){
    const inputElement = document.querySelector('#todo-input');
    const value = inputElement.value;
    
    const newElement = document.createElement('div');
    let idValue = 'todo-'+count;
    newElement.setAttribute('id', idValue);
    newElement.innerHTML =`${value} <button style="border:1px border-radius:3px" onClick="deleteTodo('${idValue}')">Delete</button> <button onClick="editTodo('${idValue}')">Edit</button>`;
    const todoList = document.querySelector('#todo-list');
    if(value === ''){
        alert('Please enter a todo item');
        return;
    }
    console.log(newElement);
    todoList.appendChild(newElement);
    inputElement.value = '';
    count++;
}

function deleteTodo(target){
    const parent = document.querySelector('#todo-list');
    const element = document.querySelector('#'+target);
    if(element){
        parent.removeChild(element);
    }
}

function editTodo(target){
    const element = document.querySelector('#'+target);
    if(element){
        const fullText = element.innerHTML;
        const currentText = fullText.split('<button')[0].trim();

        const originalInnerHTML = element.innerHTML;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.style.marginRight = '10px';
     
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.style.border = '1px solid black';
        saveButton.style.borderRadius = '3px';
        saveButton.style.marginRight = '5px';
 
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.style.border = '1px solid black';
        cancelButton.style.borderRadius = '3px';
   
        saveButton.onclick = function() {
            const newValue = input.value.trim();
            if(newValue === ''){
                alert('Todo item cannot be empty');
                return;
            }
            element.innerHTML = `${newValue} <button style="border:1px border-radius:3px" onClick="deleteTodo('${target}')">Delete</button> <button onClick="editTodo('${target}')">Edit</button>`;
        };
        
        cancelButton.onclick = function() {
            element.innerHTML = originalInnerHTML;
        };
        
        element.innerHTML = '';
        element.appendChild(input);
        element.appendChild(saveButton);
        element.appendChild(cancelButton);

        input.focus();
        input.select();
    }
}