var jsondata = "{\"name\" : \"Alice\", \"age\" : 30, \"email\" : \"value@gmail.com\"}";
var user = JSON.parse(jsondata);
console.log("".concat(user.name));
console.log("".concat(user.age));
console.log("".concat(user));
