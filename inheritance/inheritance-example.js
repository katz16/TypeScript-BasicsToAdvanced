var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    person.prototype.greet = function () {
        return "Hello,  ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    person.prototype.getage = function () {
        return "Your age is ".concat(this.age, ".");
    };
    return person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return User;
}(person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ". This is your role- ").concat(this.role, ".");
    };
    Admin.prototype.manageUsers = function () {
        return "managing users with role : ".concat(this.role);
    };
    return Admin;
}(person));
var user1 = new User("john", "doe", 30);
var admin1 = new Admin("Alice", "Smith", 30, "manager");
console.log(user1.greet());
console.log(user1.getage());
console.log(admin1.greet());
console.log(admin1.getage());
console.log(admin1.manageUsers());
