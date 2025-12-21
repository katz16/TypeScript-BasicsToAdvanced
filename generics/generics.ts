//T represents any element can be added
class Stack<T>{
    private items : T[]=[];

    push(item: T){
        this.items.push(item);
    }

    pop(){
        //removes and displays last value of the array
        return this.items.pop();
    }
}

const numberstack= new Stack<number>();
numberstack.push(1);
numberstack.push(2);
console.log(numberstack.pop());

const stringstack= new Stack<string>();
stringstack.push("Hello");
stringstack.push("world");
console.log(stringstack.pop());