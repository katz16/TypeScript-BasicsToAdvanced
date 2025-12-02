class User{
    firstName :string;
    lastName : string;
    age : number;

    constructor(firstName : string, lastName : string, age : number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    greetUser(){
        return `Hello, ${this.firstName} ${this.lastName}!. This is your first class`;
    }
    getAge(){
        return `${this.firstName}'s age is ${this.age}`;
    }
}
var user1= new User("John", "Doe", 30);
var user2= new User("Jane", "Smith", 25);

console.log(user1.greetUser());
console.log(user1.getAge());    

console.log(user2.greetUser());
console.log(user2.getAge());  