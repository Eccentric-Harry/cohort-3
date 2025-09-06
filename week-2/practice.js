import fs from 'fs';

fs.readFile('a.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data + " from callback readFile");
    }
})

// promisified version

new Promise((resolve, reject)=>{
    fs.readFile('a.txt', 'utf-8', (err, data)=>{
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
}).then(data=>{
    console.log(data + " from promise readFile");
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