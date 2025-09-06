function sum(a,b){
    return parseInt(a) + parseInt(b);
}
console.log(sum(2,3));

function sumTillN(n){
    return n*(n+1);
}

console.log(sumTillN(100));

import fs from "fs";
let data = fs.readFileSync('a.txt', 'utf-8');
console.log(data);

//making setTimeout Synchrounous:

setTimeout(()=>{
    console.log("Timeout Function Executed!");
}, 1000);

function setTimeoutSync(callback, timeout){
    let startTime = Date.now();
    while(1){
        let currentTime = Date.now();
        if(currentTime - startTime >= timeout){
            break;
        }
    }
    callback();
}

function callback(){
    console.log("This is from the Synchronous Timeout function!");
}
setTimeoutSync(callback, 5000);