const currentCount = document.getElementById('main').innerHTML;
    let count = currentCount.split(" ")[1];
    const IncButton = document.getElementById('inc');
    function incrementCounter(){
        count = parseInt(count) + 1;
        document.getElementById('main').innerText = "Counter " + count;
        console.log(count);
    }
    IncButton.addEventListener('click', incrementCounter);
    function decrementCounter(){
        count = parseInt(count) - 1;
        document.getElementById('main').innerText = "Counter " + count;
        console.log(count);
}
const DecButton = document.getElementById('dec');
DecButton.addEventListener('click', decrementCounter);