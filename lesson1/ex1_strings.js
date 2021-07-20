console.log("Hello world!") // prints out hello world
// strings
var welcomeMessage = "Welcome" // single quotes work too, eg. 'welcome'
console.log(welcomeMessage)
welcomeMessage += ", user!"
console.log(welcomeMessage)
let firstLetter = welcomeMessage[0] // 0th index is 1st character, index 1 is character 2 and so on
console.log(firstLetter)

// argument 1 is position to take substring from, argument 2 is the length of the substring
"Welcome"
console.log(welcomeMessage.substr(1, 2))

// argument 1 is position to take substring from, argument 2 is where to end substring
console.log(welcomeMessage.substring(1, 5))

console.log(welcomeMessage.length) // length of string, or how many characters are in it
console.log(welcomeMessage) // substr and substring both return a copy and do not modify the original string

console.log("this is your usual message: ") // the + symbol concatenates or combines two strings together
console.log(`This is a template literal message: ${welcomeMessage}`) // template literal/strings allow you to reference variables directly within strings