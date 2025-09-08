/*
    Write a code that
    1. logs `hi` after 1 second
    2. logs `hello` 3 seconds after step 1
    3. logs `welcome` 5 seconds after step 2
*/

// using callbacks();

let start = Date.now();
function assignment(){
    setTimeout(()=>{
        console.log("hi");
        setTimeout(()=>{
            console.log("hello");
            setTimeout(()=>{
                console.log("welcome");
                console.log("Total time:", (Date.now() - start)/1000, "seconds");
            }, 5000);
        },3000)
    }, 1000);
}

assignment();

// using Promises

function promisifiedSetTimeout(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, ms);
    })
}

promisifiedSetTimeout(1000)
.then(()=>{
    console.log("hi");
    return promisifiedSetTimeout(3000)
}).then(()=>{
    console.log("hello");
    return promisifiedSetTimeout(5000);
}).then(()=>{
    console.log("welcome");
    console.log("Total time:", (Date.now() - start)/1000, "seconds");
})