import fs from "fs";

// Synchronously

let data = fs.readFileSync('a.txt', 'utf-8');


let data2 = fs.readFileSync('b.txt', 'utf-8');


// Asynchronously

function printData(error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
}
console.log("Reading A");
fs.readFile('ab.txt', 'utf-8', printData);
console.log("Completed Reading A");

console.log("Reading B");

fs.readFile('b.txt', 'utf-8', printData);
console.log("Completed Reading B");
