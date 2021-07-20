const fs = require("fs")

// reading error logs
function hello(x) {
    x *= 3
    let data = fs.readFileSync("data.txt")
    return x / bye(4) * quadratic(2)
}

function bye(y) {
    console.log(y + y)
    hello(3)
    return 5 - 15 + 10
}

function quadratic(z) {
    bye(4)
    return z*2 + 3*z - 10
}

console.log(hello(0))

// block commenting/uncommenting - select the block you wish to comment or uncomment
// and press CTRL /

// debugging: comment the code above and uncomment the following code
// function hello(x) {
//     x *= 3
//     return x / bye(4) * quadratic(2)
// }

// function bye(y) {
//     return 5 - 15 + 10
// }

// function quadratic(z) {
//     bye(4)
//     return z*2 + 3*z - 10
// }

// console.log(hello(3) * 5 + 3) // we expect to get a number here, yet we don't...
// // pinpoint the source of error in this statement
// // then check why the source of the error creates an error in the first place
// // Hint: how can you find out which values cause the error/are incorrect


// random water bottle object
let waterbottle = {
    color: "blue",
    volume: 1000,  // in millilitres
    brand: "Nike",
    owner: "Jeb"
}