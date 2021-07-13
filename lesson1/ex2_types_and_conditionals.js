// numbers
var count = 7
console.log(count)
count += 1 // works with -= /= *= %=
console.log(count)
count = 16 / count
console.log(count)
count **= 3
console.log(count) // count is raised (**) to the power 3

// Booleans and none-types
let noneType
console.log(noneType) // undefined
noneType = 1 / 0 * 0
console.log(noneType) // NaN - not a number
noneType = true

// Conditionals and typing
// indentation!!
if (noneType) { // evalutes to if true, so the body is run
    console.log("noneType evaluates to true")
} else {
    console.log("noneType evaluates to false")
}

noneType = null
if (noneType) { // null is a falsey type, not a truthy type
    console.log("noneType evaluates to true")
} else if (noneType == "3") {
    console.log("noneType is 3")
} else {
    console.log("I'm not sure what noneType is...")
}

const constNumber = 2
// constNumber = 3 // throws an error if uncommented

let number1 = 5
if (number1 >= 7) {
    console.log("more than or equal to 7")
} else if (number1 === "5") { // strict equality, checks if the variables are of the same type
    // in this case, number1 is a number while "5" is a string
    console.log("number1 is a string 5")
} else if (number1 == "5") { // loose equality
    // the second argument is converted to the first argument's type
    var number2 = 6
    var number3 = 7 // try commenting out this line and uncommenting the next
    // let number3 = 7
    console.log("number1 is a 5")
}

console.log(number2, number3)

console.log("abc" + 1) // loose typing in action. the second argument 1 is converted to a string