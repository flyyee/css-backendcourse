// functional programming
function quadratic(x) {
    console.log(x**2 + 3*x + 4)
}
for (let x = 0; x < 5; x++) {
    quadratic(1)
}
for (let x = 0; x < 5; x++) {
    quadratic(x)
}

//  WET code
// repeating yourself - what if you did this 1000 times?
console.log(1**2 + 3*1 + 4)
console.log(1**2 + 3*1 + 4)
console.log(1**2 + 3*1 + 4)
console.log(1**2 + 3*1 + 4)
console.log(1**2 + 3*1 + 4)

// unreusable - easy to slip up
console.log(0**2 + 3*0 + 4)
console.log(1**2 + 3*2 + 4) // mistake
console.log(2**2 + 3*2 + 4)
console.log(3**2 + 3*3 + 4)
console.log(2**2 + 3*4 + 4) // mistake