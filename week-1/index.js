const users = [{
    name: 'Alice',
    age: 30,
    gender:'M'
},{
    name:'Sheela',
    age:25,
    gender:'F'
},{
    name: 'twinkle',
    age: 10,
    gender:'F'
},{
    name:'Shaemeela',
    age:15,
    gender:'F'
},{
    name: 'Vamsi',
    age: 22,
    gender: 'M'
}]
let maleMajor = [];
function isMaleMajor(users){
    for(let i = 0; i < users.length; i++){
        if(users[i].age >= 18 && users[i].gender === 'M'){
            maleMajor.push(users[i]);
        }
    }
    return maleMajor;
}

function isFemaleMajor(users){
    return users.filter(user => user.age >= 18 && user.gender === 'F');
}

function isMinor(users){
    return users.filter(user => user.age < 18);
}



function isEligible(users){
    return users.filter((user, index, arr) => {
        return user.age >=18;
    })

}

let arr = [1,2,3];
// arr.forEach((x,i, a)=>console.log(i,x, a));

// console.log(isEligible(users));

let arr1 =[1,2,3,4,5];
let obj = {multiplier: 2};

arr1.forEach(function(element){
    console.log(element* this.multiplier);
}, obj);