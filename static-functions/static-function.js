//Static function is mainly used to access a function directily from class without creating the instance of the class
var User = /** @class */ (function () {
    function User() {
    }
    User.checkAge = function (age) {
        return age >= 18;
    };
    return User;
}());
console.log(User.checkAge(15));
