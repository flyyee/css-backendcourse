// Functions
function SayHi() {
    console.log("Hello!!")
}
SayHi()

function Square(x) {
    console.log(x**2) // outputs the value of x squared
}
Square(4)

function SquareWithRet(x) {
    return x**2
}
SquareWithRet(6)
// let SquareReturnValue = SquareWithRet(6)
// console.log(SquareReturnValue)
// Alternatively,
// console.log(SquareWithRet(6))

var globalVariable = "im a global variable"
console.log(globalVariable)
function Tamper() {
    globalVariable = "ive been tampered with"
    // this directly modifies the global variable
    console.log(globalVariable)
}
Tamper()
console.log(globalVariable)

var globalVariable2 = "im another global variable"
console.log(globalVariable2)
function NotTamper() {
    var globalVariable2 = "this is ok!"
    // this creates another variable instead of directly modifying the original global variable
    console.log(globalVariable2)
}
NotTamper()
console.log(globalVariable2) // remains unchanged

// different ways to express functions
let myFunction = function () { // notice how the function is not named, but assigned to a variable
    console.log("this is one way")
}
console.log(myFunction)
myFunction()

myFunction = () => { // this is known as an ES6 arrow function
    console.log("this is another way")
}

let mySquareFunction = x => {
    console.log(x**2) // this is how to do it with parameters
}

let mySquareFunction2 = (x, y) => {
    console.log(x**2, y**2) // this is how to do it with multiple parameters
}

// passing function and callbacks
function Machine(x, operationFunction) {
    x = x**2 - 3 * x + 4
    console.log(operationFunction(x))
}

mySquareFunction = x => {
    return x**2
}
Machine(3, mySquareFunction) // mySquareFunction is passed as a callback function to the Machine function
// in the sense that the Machine function calls mySquareFunction back once it is done with its calculations 
// callback functions are often used when dealing with other libraries

let clog = x => console.log(x)