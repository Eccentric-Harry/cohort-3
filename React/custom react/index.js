const container = document.getElementById('main');
const state = {
    count:0
}

function onButtonClick(){
    state.count++;
    render();
}

function render(){
    const button = document.createElement('button');
    button.innerText = `Count ${state.count}`;
    button.setAttribute(onclick, "onButtonClick()");
    button.addEventListener('click', onButtonClick);
    container.innerHTML= '';
    container.appendChild(button);
}

render();