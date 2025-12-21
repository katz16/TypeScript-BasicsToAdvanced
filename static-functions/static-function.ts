//Static function is mainly used to access a function directily from class without creating the instance of the class

class User{
    //inside static function, we cannot use instance variables as instance variables can be accessed only after creating an instance of the class
    static checkAge(age : number){
        return age>=18;
    }
}

console.log(User.checkAge(15));