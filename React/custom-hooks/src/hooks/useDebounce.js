
let currentClock;

async function serachBackend(){
    // const response = await fetch(url);
    // return await response.json();
    console.log("request sent to backend")
}


function debounceSearchBackend(){
    clearTimeout(currentClock);
    currentClock = setTimeout(serachBackend, 200);
}


debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();

