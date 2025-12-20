var counter = 0;
function incrementCounter() {
    return counter++;
}
function getCounter() {
    return counter;
}
incrementCounter(); // increments the value to 1
console.log(getCounter());
incrementCounter(); // increments the value to 2
console.log(getCounter());
