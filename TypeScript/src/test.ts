interface Employee{
    name:string;
    age:number;
    department:string;
}

interface Manager{
    name:string;
    age:number;
}

type User = Manager & Employee;

let user1:User = {
    name:"John",
    age:5,
    department:"IA",
}

type Users = Manager | Employee;

let user2:Users = {
    name:"Harry",
    age:2,
    department:"IA",
}