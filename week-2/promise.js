function callback(){
    console.log("This is a callback function!");
}

setTimeout(callback, 2000);

function promisifiedSetTimeout(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        },ms);
    })
}

promisifiedSetTimeout(3000).then(()=>{
    console.log("This is from the promisified setTimeout function!");
})


import fs from 'fs';

fs.readFile('a.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data + " from callback readFile");
    }
})

function promisifiedReadFile(path, encoding = 'utf-8'){
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

promisifiedReadFile('a.txt').then(data=>{
    console.log(data + " from promisifiedReadFile");
})