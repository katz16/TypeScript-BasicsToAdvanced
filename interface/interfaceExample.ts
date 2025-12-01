interface User{
    firstName: string;
    lastName: string;
    age: number;
    middleName?: string; // this is an optional property and may or may not be present
}

function greetUser(user :User){
    return `Hello ${user.firstName} ${user.lastName}!`;
}

function logUserDetails(user:User){
    console.log(`the user details are - First Name: ${user.firstName}
        Middle Name: ${user.middleName}
        Last Nane: ${user.lastName}
        Age: ${user.age}`);
}
var user1={firstName : "Vikram",
                lastName : "Karthik",
                age : 2.8
 }
 console.log(greetUser(user1));
logUserDetails(user1);       