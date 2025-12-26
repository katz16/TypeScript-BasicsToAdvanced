//Decorator factory are functions decorator function. They provide
//a way to create decorators that can be customized based on configuration 
//options or parameters
//This allows us for flexibility and reusability of decorators

function loggerDecorator(logMsg:string) {
    function logger(target:Function){
    //console.log("logging");
    console.log(logMsg);// now we can pass a custom log message to loggerDecorator
    //console.log(target);
}
return logger;
}

@loggerDecorator("this is a custom logger")
class User2{
    name:string="john";
    age:number=28;

    constructor(){
        console.log("constructor called");
    }
}   

const user2= new User2();