class User1{
    private name: string;
    private age: number;

    constructor(name: string, age:number){
        this.name=name;
        this.age=age;
    }

    public getName(){
        return this.name;
    }

    public getAge(){
        return this.age;
    } 
    
    public setName(name : string){
        this.name=name;
    }

    public setAge(age : number){
        if(age>0){
            this.age=age;
        }
        else{
            console.log(`age is not valid`);
        }
        
    }

}

const user1= new User1(`Vikram`,3);
console.log(user1, 'User object');
console.log(user1.getName(), 'User name');
console.log(user1.getAge(), 'User age');

user1.setName("Swaathi");
user1.setAge(-30);
console.log(user1.getName(), 'User name');
console.log(user1.getAge(), 'User age');
