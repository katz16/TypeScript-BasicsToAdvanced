//the question mark makes the parameter optional
function concatStrings(a:string, b:string, c?:string){
    return a+b+c
}
var result1 = concatStrings("Hello, ", "world! ", "Have a great day!");
console.log(result1); 