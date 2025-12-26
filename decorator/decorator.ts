function logger(target:Function){
    console.log("logging");
    console.log(target);
}

@logger
class User{
    name:string=`john`;
    age:number=28;

    constructor(){
        console.log("constructor called");
    }
}   

const user= new User();