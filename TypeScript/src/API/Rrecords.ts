
type User = {
    id: number
    name: string
}

type Users = {
    [key:string]:User
}


const users = {
    "rad@12" : {
        id: 1,
        name: "rad@12",
    },
    "email@12": {
        id: 1,
        name: "email@12",
    }
}

// this type looks confusing and complex. so we introduce Record<>

type UpdatedUsers = Record<string,{id:string, name:string}>;