var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greetUser = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName, "!. This is your first class");
    };
    User.prototype.getAge = function () {
        return "".concat(this.firstName, "'s age is ").concat(this.age);
    };
    return User;
}());
var user1 = new User("John", "Doe", 30);
var user2 = new User("Jane", "Smith", 25);
console.log(user1.greetUser());
console.log(user1.getAge());
console.log(user2.greetUser());
console.log(user2.getAge());
