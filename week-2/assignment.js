// write a promisified version of fs.readFile
// callback version: 
import fs from 'fs';

fs.readFile('a.txt', 'utf-8', callbackReadFile);

function callbackReadFile(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data + " from callback readFile");
    }
}

function promiseReadFile(path, encoding = 'utf-8'){
    return new Promise((resolve, reject)=>{
        fs.readFile(path, encoding, (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

promiseReadFile('a.txt').then(data=> {
    console.log(data + " from promise readFile");
})



// const dataFromA = fs.readFileSync('a.txt', 'utf-8');
// console.log(dataFromA);

// setTimeout(main, 1000);
// const promiseForTimeout = new Promise(executorTimeout);
// promiseForTimeout.then(main);

// function executorTimeout(resolve, reject){
//     setTimeout(resolve, 1000);
// }

// function main(){
//     console.log("Hi from main!");
// }

// const promiseReadFile = new Promise(executorReadFile);
// promiseReadFile.then(callbackReadFile);

// function executorReadFile(resolve, reject){

// }