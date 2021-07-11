// Loops
let number1 = 5
while (number1 > 2) { // the loop runs continuously while the condition in the brackets is true
    number1 -= 1
    console.log(`The value of number1 is ${number1}`)
}

// while (true) {
//     // this runs forever
//     console.log("infinite loop that should not be in your code")
// }

// a variant
console.log("a variant of the while loop below...")
number1 = 5
while (true) {
    number1 -= 1
    console.log(`The value of number1 is ${number1}`)
    if (number1 <= 2) {
        break // breaks the loop it is in
    }
}

for (let x = 0; x < 3; x++) { // the first part sets the counting variable
    // the second part is the condition that the for loop keeps running for
    // the third part is how the for loop changes the variable every iteration (++ means adding 1 to it)
    console.log(`The value of x is ${x}`)
}

// alternatively, from the top
// also notice how we redefine x below. this is because the counting variable only exists while the loop runs
for (let x = 3; x > 0; x--) { // -- is the same as x -= 1
    console.log(`The value of x is ${x}`)
}

// nested for loops show every possible combination of the numbers 1, 2 and 3
for (let x = 1; x < 4; x++) {
    for (let y = 1; y < 4; y++) {
        console.log(`${x}${y}`)
    }
}