interface User{
    name:string,
    email:string,
    phone:string,
    address:string,
    username:string,
    password:string,
}

const user:User={
    name:"Harinadh",
    email:"something@mail.com",
    phone:"898574635485",
    address:"India",
    username:"Eccentric-Harry",
    password:"Hari",
}

type UpdateProp = Pick<User, 'username' | 'password' | 'email'>

type UpdatePropPartial = Partial<UpdateProp> // this makes every prop to be optional.


const updateDataPick = (updateProp: UpdateProp)=>{
    if(updateProp.username !==undefined){
        user.username = updateProp.username;
    }
    if(updateProp.password!==undefined){
        user.password = updateProp.password;
    }
    if(updateProp.email!==undefined){
        user.email = updateProp.email;
    }
};

updateDataPick({
    username:"newUsername",
    password:"newPassword",
    email:"newEmail",
})
console.log(user);