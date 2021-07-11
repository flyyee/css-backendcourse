// Asynchronicity is important in server development as you will often be doing different operations
// Each of which take time, eg. fetching images, download images, sorting database data
// Instead of running them one after the other, you can run all of them asynchronously, saving time
// Don't worry if you find this concept challenging, many do at first!
// But the more you encounter code using promises, the better you'll understand it.

async function myAsyncFunction() {
    setTimeout(() => { // what does setTimeout do?
        console.log("hi there")
    }, 1000)
}

myAsyncFunction() // does this run before or after the next statement?
console.log("bye bye")

// async function myAsyncPromiseFunction() {
//     return new Promise((res, rej) => { // short for resolve and reject
//         setTimeout(() => {
//             let success = true
//             // do some operations
//             if (success) {
//                 res("good job!")
//             } else {
//                 rej("unknown error")
//             }
//         }, 1000)
//     })
// }

// async function main() {
//      // await can only be used in a async function
//     await myAsyncPromiseFunction() // try it without await
//     .then(res => { // short for result
//         console.log(`operation succeeded and returned: ${res}`)
//     })
//     .catch(err => { // short for error
//         console.log(`an error was throw: ${err}`)
//     })
//     console.log("hello world")
// }

// main()