class Stack {
    constructor() {
        this.items = []; // Use an array to store the stack elements
    }

    // Add an item to the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top item
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Return the top item without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}

// Example Usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true


function isParenthesisBalanced(s) {
    
    let stack = [];

    let mapBracs = {
        "}":"{",
        ")":"(",
        "]":"["
    }

    for (let char of s){
        if(char in mapBracs){
            const top = stack.length > 0 ? stack.pop() : "#";
            if(top !== mapBracs[char]){
                return false
            }
        }else{
            stack.push(char)
        }
    }
    return true
}
console.log(isParenthesisBalanced("[{()}}]"));