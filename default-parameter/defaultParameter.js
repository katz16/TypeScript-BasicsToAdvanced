// we are passing ! as default value for paramter c
var test = function concatStrings(a, b, c) {
    if (c === void 0) { c = "!"; }
    return a + b + c;
};
console.log(test("Hello, ", "world"));
