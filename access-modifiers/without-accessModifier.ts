class User{
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name=name;
        this.age=age;
    }

}

const user= new User(`Vikram`,3);
console.log(user, 'User object');
console.log(user.name, 'User name');
console.log(user.age, 'User age');

console.log("========== since no access modifier is used, we can change the name and age attribute of user ============");
user.name='Swaathi';
user.age=30;

console.log(user, 'User object after name and age change');
console.log(user.name, 'User name after name and age change');
console.log(user.age, 'User age after name and age change');