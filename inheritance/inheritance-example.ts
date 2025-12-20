class person{
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet(){
        return `Hello,  ${this.firstName} ${this.lastName}.`;
    }
    getage(){
        return `Your age is ${this.age}.`;
    }

}

class User extends person{
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
    }
}

class Admin extends person{
    role: string;
    constructor(firstName: string, lastName: string, age: number, role: string) {
        super(firstName, lastName, age);
        this.role = role; 
    }
    greet(){
        return `Hello ${this.firstName} ${this.lastName}. This is your role- ${this.role}.`;
    }
    manageUsers(){
        return `managing users with role : ${this.role}`;
    }
}

let user1=new User("john","doe", 30);
let admin1= new Admin("Alice", "Smith", 30, "manager");
console.log(user1.greet());
console.log(user1.getage());

console.log(admin1.greet());
console.log(admin1.getage());
console.log(admin1.manageUsers());
