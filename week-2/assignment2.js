/* Write a function that 
   1. reads the file's content,
   2. Trims the extra space from left and right,
   3. writes it back to the file.
*/

import fs from 'fs';

// 1

// fs.readFile('a.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log('Error in reading file', err);
//         return;
//     }
//     console.log('File read!')
//     return data;
// })

function cleanData(path, encoding = 'utf-8'){
    let data = null;
    fs.readFile(path, encoding, (err, fileData)=>{
        if(err){
            console.log('Error in reading file', err);
            return;
        }
        data = fileData;
        data = data.trim();
        fs.writeFile(path, data, (err)=>{
            if(err){
                console.log('Error in writing file', err);
            }
            console.log('File written successfully');
        })})
}

cleanData('a.txt')

function cleanFile(path, encoding = 'utf-8'){
    return new Promise((resolve, reject)=>{
        fs.readFile(path, encoding, (err, fileData)=>{
            if(err){
                return reject(err);
            }
            let data = fileData.trim();
            fs.writeFile(path, data, (err)=>{
                if(err){
                    return reject(err);
                }
                console.log('File written successfully');
                resolve();
            })
        })
    })
}

cleanFile('a.txt')
    .then(()=>{
        console.log('File cleaned successfully');
    })
    .catch((err) => {
        console.error('Error cleaning file:', err);
    });