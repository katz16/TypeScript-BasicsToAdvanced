function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName, "!");
}
function logUserDetails(user) {
    console.log("the user details are - First Name: ".concat(user.firstName, "\n        Middle Name: ").concat(user.middleName, "\n        Last Nane: ").concat(user.lastName, "\n        Age: ").concat(user.age));
}
var user1 = { firstName: "Vikram",
    lastName: "Karthik",
    age: 2.8
};
console.log(greetUser(user1));
logUserDetails(user1);
