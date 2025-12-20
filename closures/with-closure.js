function createCounter() {
    var counter = 0;
    return {
        increment: function () {
            counter++;
        },
        getValue: function () {
            return counter;
        }
    };
}
;
var counter1 = createCounter();
counter1.increment();
console.log(counter1.getValue(), "COUNTER-1");
var counter2 = createCounter();
counter2.increment();
console.log(counter2.getValue(), "COUNTER-2");
