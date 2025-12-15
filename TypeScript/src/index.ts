let x: number = 1;

console.log(x);

function sum(a:number, b:string):string{
    return a+b;
}
console.log(sum(12, "1"));

function delayedCall(fn: ()=> void){
    setTimeout(fn, 3000);
}

delayedCall(():void=>{
    console.log("From the delayed function call!");
});


// TypeScript 101

function greet(name: string){
    console.log("Hello " + name);
}

function delayedGreeting(fn: (a: string)=>void){
    setTimeout(fn, 3000);
}

// delayedGreeting(greet("Harry")) // immediately calls greet() with argument "Harry" which returns void. now this void is being passed in delayedGreeting() but that expects a function and not the return value of greet(). so use a wrapper function to delay the function call for greet()
delayedGreeting(()=> greet("xyz"));

// function delayedGreeting(fn: (a: string) => void, name: string) {
//     setTimeout(() => fn(name), 3000);
// }
//
// delayedGreeting(greet, "xyz");
greet("Hari");


function greeting(user:{
    name:string,
    age:number
}):void{
    console.log("Hello " + user.name);
}

let user:{
    name:string,
    age:number
} = {
    name:"Harinadh",
    age:21
}

interface UserType{
    name:string,
    age:number
}

function greetUser(user: UserType){
    console.log("Hello " + user.name);
}

greetUser({name:"Harinadh", age:21});


interface Manager{
    name: string;
    age:number;
}

interface Employee{
    name: string;
    department: string;
}

type userType = Manager & Employee;

let users: UserType[];

// function filterUsers(users:UserType){
//     users.filter(user=>{user.age>18})
// }