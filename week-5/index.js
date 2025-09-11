arr = [1,2,3,4,5,6];
const newArr = arr.map(x=>{
    return x * 2;
});
console.log(newArr);



const azz=  arr.filter(x=>{
    console.log(x%2===0);
    return x % 2 === 0;
})
console.log(azz);

//reduce function
const sum = arr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0);
console.log(sum);
