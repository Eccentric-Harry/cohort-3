console.log('Hi Harry!');

function helper(){
    console.log('Timeout Function Executed!');
}

setTimeout(helper, 10000);

let c = 0;
for(let i = 0; i < 100000000000; i++){
    c+=1;
}

console.log('Executed CPU Intensive Task!',c);