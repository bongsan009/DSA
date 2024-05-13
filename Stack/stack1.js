

// ! Stack Implementation Using Array Fixed Size:

let top = -1; // keep track the ind of the array.
let capacity = 100; 

// Allocated 100 locations in the array and filled the val 0 every locations.
let array = Array(capacity).fill(0);

// add item into the stack.
function push(elem)
{
    //In this case, if the stack is overflow.
    if(top == capacity - 1)
    {
        console.log("Stack overflows.");

    }else {
        //increment the top by 1
        top = top + 1;
        array[top] = elem;
    }
}

// remove an element from the stack and return to the caller.
function pop(){

    //If the stack has no any elems. Otherwise, popped the top element and give it to the caller.
    if(top == -1)
    {
        console.log("Stack underflow.")
    } else {
        top -= 1;
        let popped = array[top];

        return (popped)
    }
}

// return or give the top element from the Stack to the caller.
function peek()
{
    if(top == -1)
    {
        console.log("Stack underflows");

    }else {
        let topElement = array[top];
        return (topElement)
    }
}

// function display all elements from the Stack.
function printElement()
{
    //using loop reverse order.
    for(let i = top; i > -1; i--)
    {
        console.log(array[i])
    }
}


//Add some elements into the Stack.
push("10");
push("20");
push("30");
push("40");
push("50");

//list all elements from the Stack to the terminal.
printElement();

pop();
let topElement = peek();

console.log("The top elem in the stack is :: ", topElement)
