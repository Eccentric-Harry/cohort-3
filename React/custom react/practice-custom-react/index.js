const container = document.getElementById('main');
console.log(container);
let count = 0;

function onButtonClick(){
    count = count+1;
    render();
}

function render(){
    container.innerHTML = '';
    const button = document.createElement('button');
    button.innerText = 'Counter: ' + count;
    button.setAttribute('onClick', onButtonClick);
    button.addEventListener('click', onButtonClick);
}

render();