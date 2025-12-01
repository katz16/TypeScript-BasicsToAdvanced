// we are passing ! as default value for paramter c
var test=function concatStrings(a:string,b:string,c:string="!"){
    return a+b+c;
}
// calling function without passing value for c
console.log(test("Hello, ","world"));