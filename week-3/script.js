const element = document.getElementById('counter');
let value = element.innerHTML;

function increment(){
    value = parseInt(value) + 1;
    element.innerHTML = value;
}

for(let i = 0; i < 10; i++){
    setTimeout(increment, i*1000);
}

// setInterval(increment, 1000);