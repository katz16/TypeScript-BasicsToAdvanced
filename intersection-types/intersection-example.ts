interface User{
    id:number;
    name:string
}

interface Admin{
    isAdmin:boolean;
    accessLevel:string
}

type adminUser= User & Admin;
let user:adminUser={
    id:123,
    name:"Alice",
    isAdmin:true,
    accessLevel:"Admin level"
}

console.log(user.id);
console.log(user.name);
console.log(user.isAdmin);
console.log(user.accessLevel);