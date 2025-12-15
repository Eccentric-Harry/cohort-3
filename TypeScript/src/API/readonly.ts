interface User{
    readonly username: string;
    readonly age:number;
}

// now we cannot modify the internal values of the object of type User

// or we can simply do:
const user: Readonly<User> = {
    username:"fsdgf",
    age:20
}
