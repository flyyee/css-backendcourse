// npm i -S express
const path = require('path');
const express = require('express')
const app = express() // creates an instance of an express app
const port = 3000 // defines the port that your backend is exposed on. Don't change this

app.use(express.urlencoded({extended: true})) // allows you to parse POST request data

app.get("/", (req, res) => {
    let options = {
        root: path.join(__dirname)
    };
    res.sendFile("ex2_main.html", options) // sendFile is similar to send, but it sends a file to the user instead.
    // the file can contain html like this one does.
    // the above options sets it such that express looks for the file you are sending in your current directory
})

app.get("/attendance", (req, res) => { // this file is served instead when users visit the /attendance path instead of the default / path
    let options = {
        root: path.join(__dirname)
    };
    res.sendFile("ex2_list.html", options)
})

app.get("/remove", (req, res) => { // this file is served instead when users visit the /remove path instead of the default / path
    let options = {
        root: path.join(__dirname)
    };
    res.sendFile("ex2_remove.html", options)
})

app.get("/api/add", (req, res) => {
    console.log(req.query.name)
    console.log(req.query.regNum)
    res.send("success")
})

// there are many request TYPES that can be specified by the requester
// the types tells you what the requester wants
// for example, GET tells you that he wants to GET or view some data
//  POST tells you that he wants to POST or upload some data
//  PUT and DELETE are 2 other common request types
app.post("/api/add", (req, res) => { // this deals with POST requests instead of GET requests
    console.log("here")
    console.log(req.body.name) // note that we are looking at the body property and not the query property for POST requests
    console.log(req.body.regNum)
    res.send("success")
})

app.get("/api/attendance", (req, res) => {
    res.json({ // res.json sends a JSON response.
        // \JSON stands for Javascript Object Notation. These are the objects we learnt earlier in example 5.
        // they are enclosed in curly braces as shown
        // res.json is a function that accepts an object as its parameter.
        listOfStudents: students,
        numberOfStudents: students.regNum.length
    })
})
app.listen(port, () => {
  console.log(`Your app is listening at http://localhost:${port}`) // Exposes your backend on the port 3000
}) // Typically, the backend would be exposed across the Internet
// But for simplicity, we'll run it locally first (only WE can check it out)