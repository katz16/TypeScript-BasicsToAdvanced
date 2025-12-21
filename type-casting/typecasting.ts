interface User{
    name:string;
    age:number;
}

const jsondata=`{"name" : "Alice", "age" : 30, "email" : "value@gmail.com"}`;
//jsondata variable is typecaseted as User interface
//the attribute email is not defined in User interface
//So it will not be considered while typecasting as User
const user= JSON.parse(jsondata) as User;
console.log(`${user.name}`);
console.log(`${user.age}`);
console.log(`${user}`)