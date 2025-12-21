class User{
    name : string;
    static userCount : number=0;

    constructor(name : string){
        this.name=name;
        User.userCount++;
    }

    static getUserCount(){
        return User.userCount;
    }
}

function createUser(name : string){
    return new User(name);
}

const user1= createUser("Alice");
const user2= createUser("Bob");
console.log(User.getUserCount());