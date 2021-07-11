let clog = x => console.log(x) // from ex4.js

// arrays and objects
let myArray = [1, 2, 3]
clog(myArray)
clog(myArray[1]) // index 0 is the 1st element, so index 1 is the 2nd
clog(myArray[4]) // undefined because it is out of the array's index
clog(myArray.length) // how many elements are in it

myArray = new Array(6) // creates an array with six empty elements
clog(myArray.length)
myArray = myArray.fill(4) // fills all elements with the number 4
clog(myArray)

myArray.fill("5", 2, 4) // fills all elements from index 2 to index 4 with "5"
// note that fill stops before index 4
clog(myArray)

myArray = ["a", "b", "c"]
for (let x = 0; x < myArray.length; x++) { // this is a common pattern you will see
    console.log(myArray[x])
}
// this is a cleaner way to do it
for (let element of myArray) { // element can be any variable name
    console.log(element)
}

myArray.push("d") // adds an element to the end of the array
console.log(myArray)
myArray.push("e", "f") // you can add multiple elements too
console.log(myArray)

let poppedElement = myArray.pop() // pops/removes the last element of an array
// the popped element is stored in the variable
console.log(myArray)
console.log(poppedElement)

let myArray2 = [1, 2, 3]
let myArray3 = myArray.concat(myArray2)
console.log(myArray3)

let myObj = {} // all objects are defined with the curly braces
myObj = {
    color: "red", // the name on the left is the property name, while the value is on the right
    favNumber: 1, // be sure to use colon : to assign values instead of equals
    days: 42
}
console.log(myObj)
console.log(myObj["color"])
console.log(myObj.color) // another way to write it
myObj.favNumber = 3 // note that we use equals here as we are not assigning the value within the curly braces
myObj["days"] = "hello"
console.log(myObj)

// looping through properties
for (let property in myObj) { // take note that IN is used for objects
    console.log(property) // remember that above, we used OF for arrays
}
for (let property in myObj) {
    console.log(`${property}: ${myObj[property]}`)
}