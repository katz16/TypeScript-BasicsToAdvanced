var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.userCount++;
    }
    User.getUserCount = function () {
        return User.userCount;
    };
    User.userCount = 0;
    return User;
}());
function createUser(name) {
    return new User(name);
}
var user1 = createUser("Alice");
var user2 = createUser("Bob");
console.log(User.getUserCount());
