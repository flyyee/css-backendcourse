// be sure to install express first with
// npm install express --save
// or
// npm i -S express
const path = require('path');
const express = require('express')
const app = express() // creates an instance of an express app
const port = 3000 // defines the port that your backend is exposed on. Don't change this

app.get('/', (req, res) => { // When a GET request is sent to your server (a user wants to GET some information)
    // your app will also receive a req-uest and res-ponse object, which you will use to serve the user.
    // req contains information about the user's request
    // res contains information on how YOU will respond to his request
    res.send('Hello World!')
    // res.send sends a response. Try enclosing hello world in <b></b> tags.
    // res.send is a function, which is why there is a () by it. The text hello world is its only argument.
})

app.get("/", (req, res) => {
    let options = {
        root: path.join(__dirname)
    };
    res.sendFile("ex9_main.html", options) // sendFile is similar to send, but it sends a file to the user instead.
    // the file can contain html like this one does.
    // the above options sets it such that express looks for the file you are sending in your current directory
})

app.get("/attendance", (req, res) => { // this file is served instead when users visit the /attendance path instead of the default / path
    let options = {
        root: path.join(__dirname)
    };
    res.sendFile("ex9_list.html", options)
})

app.get("/remove", (req, res) => { // this file is served instead when users visit the /remove path instead of the default / path
    let options = {
        root: path.join(__dirname)
    };
    res.sendFile("ex9_remove.html", options)
})

// TODO: create your list of students
// in this list, it should contain their name AND register number
// Hint: arrays?

app.get("/api/add", (req, res) => {
    console.log(req.query.name)
    console.log(req.query.regNum)
    // TODO: do something with this info
    // add him to your list of students
    // Hint: objects?
    res.send("success")
})

app.get("/api/attendance", (req, res) => {
    // TODO: Change the json response to send your array of students and the number of students
    res.json({ // res.json sends a JSON response.
        // \JSON stands for Javascript Object Notation. These are the objects we learnt earlier in example 5.
        // they are enclosed in curly braces as shown
        // res.json is a function that accepts an object as its parameter.
        listOfStudents: [],
        numberOfStudents: 3
    })
    // Extension: Now, a student can log in twice (his register number appears twice in your list). How can you fix this?
})

// Extension: Create an endpoint to remove students from your list given that their name is stored in req.query.name
// The endpoint should be called /api/remove
// What if the student is not currently in your list of students?

app.listen(port, () => {
  console.log(`Your app is listening at http://localhost:${port}`) // Exposes your backend on the port 3000
}) // Typically, the backend would be exposed across the Internet
// But for simplicity, we'll run it locally first (only WE can check it out)