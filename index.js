const counter = (()=>{
    let count = 0;
    return {
        increment: () =>{
            return ++count;
        },
        decrement : ()=>{
            return -count;
        },
        getCount : ()=>{
            return count;
        }
    }
})();

console.log( (()=>{})())


// console.log(counter.getCount());
// console.log("Increasing count: ");
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.getCount());
