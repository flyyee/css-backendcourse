// Misc stuff
// Due to time constraints, I've left out some extra content in here
// If you're learning JS for the first time, it can be challenging to even find what you do not know
// So, I've compiled a couple of other details here that are good to know
// and a few additional reading materials if you are interested
// i highly recommend reading them, and I've tried to choose simpler materials

// Parsing
let stringNumber = "3"
console.log(stringNumber + 1)
console.log(parseInt(stringNumber) + 1) // parseInt converts a string into an integer
stringNumber = "-3.14"
console.log(parseFloat(stringNumber) - 1) // parseFloat does the same for floating point numbers
// floating point numbers, or floats, are any number with decimals
// note that floating point numbers are not exactly precise but are usually precise enough for our needs


// Ternary
let ternaryVar = true // try setting this to false and see what is printed below
console.log(ternaryVar ? "hello" : "bye")
// this combination of ? and : are the ternary operators
// they expand to
function ternary(Var, arg1, arg2) {
    if (Var) {
        return arg1
    } else {
        return arg2
    }
}
console.log(ternary(ternaryVar, "hello", "bye"))
// you usually use ternary to make code more succinct


// Map and filter
let array1 = [1, 2, 3]
let array2 = array1.map(x => x * 2) // creates a new array based on the elements of another array
console.log(array2)
let array3 = array2.filter(x => x < 5) // filters out elements from an array based on a condition
console.log(array3)
// the notation above is as such: map/filter runs through every element in the array
// you can think of it as "for (let x of array1)"
// again, x can be any variable name, but we usually keep it short for simplicity
// then, for map, it runs the instruction x * 2 and adds the output to a new array
// for filter, if the condition is true, it adds the element to a new array

// Array splicing
// Documentation at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
myArray3 = [1, 2, 3, 4, 5]
myArray3.splice(1, 2, "hey", "hello")
console.log(myArray3)

// self-reading: setTimeout
// Documentation at: https://javascript.info/settimeout-setinterval

// self-reading: classes
// Documentation at: https://www.w3schools.com/js/js_classes.asp
// We usually don't use classes in JS as often as in other languages
// It's actually often fine to write code without using classes in JS
// Read more about using *factories* instead of classes at: https://javascript.plainenglish.io/why-factories-are-better-than-classes-in-javascript-1248b600b6d4#:~:text=In%20a%20nutshell%2C%20a%20factory,a%20template%20for%20an%20object%20.

// self-reading: hoisting
// Documentation at: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// This video explains it well too: https://www.youtube.com/watch?v=8z-HSS34dsM

// self-reading: deep and shallow copies
// Explanation at: https://medium.com/@manjuladube/understanding-deep-and-shallow-copy-in-javascript-13438bad941c
// While these issues are rarer, they can still sometimes lead to frustrating bugs in your code.

// self-reading: importing
// Documentation at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// Require VS Import: https://flexiple.com/javascript-require-vs-import/
// https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x
// Require is relatively straightforward so I won't be covering how it works VS import