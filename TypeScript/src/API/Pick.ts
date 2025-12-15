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



const updateData = (username:string, password:string)=> {
    user.username = username;
    user.password = password;
}

console.log(user.username);
updateData("harry" ,"123")

console.log(user.username);

// the problem is we have multiple arguments in the function and for them we are defining types.
// but there's a simpler way to do it.

type UpdateProps = Pick<User, 'username' | 'password' | 'email'>

const updateDataPick = (updateProps: UpdateProps)=>{
    if(updateProps.username !==undefined){
        user.username = updateProps.username;
    }
    if(updateProps.password!==undefined){
        user.password = updateProps.password;
    }
    if(updateProps.email!==undefined){
        user.email = updateProps.email;
    }
};

updateDataPick({
    username:"newUsername",
    password:"newPassword",
    email:"newEmail",
})
console.log(user);