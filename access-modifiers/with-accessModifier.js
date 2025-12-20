var User1 = /** @class */ (function () {
    function User1(name, age) {
        this.name = name;
        this.age = age;
    }
    User1.prototype.getName = function () {
        return this.name;
    };
    User1.prototype.getAge = function () {
        return this.age;
    };
    User1.prototype.setName = function (name) {
        this.name = name;
    };
    User1.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
        else {
            console.log("age is not valid");
        }
    };
    return User1;
}());
var user1 = new User1("Vikram", 3);
console.log(user1, 'User object');
console.log(user1.getName(), 'User name');
console.log(user1.getAge(), 'User age');
user1.setName("Swaathi");
user1.setAge(-30);
console.log(user1.getName(), 'User name');
console.log(user1.getAge(), 'User age');
