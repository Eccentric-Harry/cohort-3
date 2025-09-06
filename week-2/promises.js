// function waitFor3S(){
//     console.log("Hi from waitFor3S!");
// }

// function setTimeoutPromisified(){
//     return new Promise(waitFor3S);
// }

// function main(){
//     console.log("Hi from main!");
// }

// setTimeoutPromisified().then(main);

// setTimeout(()=>{
//     console.log("Hi from main!");
// },10000);


function promisifiedFunction(resolve, reject){
    resolve();
}

function callback(){
    console.log("Promise is resolved!");
}


const promise = new Promise(promisifiedFunction);
promise.then(callback); // this callback will be called when the resolve() in the executor function is called.
// if we directly call the resolve() function, the promise will be resolved immediately,