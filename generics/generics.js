var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        //removes and displays last value of the array
        return this.items.pop();
    };
    return Stack;
}());
var numberstack = new Stack();
numberstack.push(1);
numberstack.push(2);
console.log(numberstack.pop());
var stringstack = new Stack();
stringstack.push("Hello");
stringstack.push("world");
console.log(stringstack.pop());
