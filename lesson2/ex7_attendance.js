// npm i -S express
const path = require('path');
const express = require('express')
// TODO: what to require here?
const app = express() // creates an instance of an express app
const port = 3000 // defines the port that your backend is exposed on. Don't change this

app.get("/", (req, res) => {
    let options = {
        root: path.join(__dirname)
    }
    res.sendFile("ex7_main.html", options) // sendFile is similar to send, but it sends a file to the user instead.
    // the file can contain html like this one does.
    // the above options sets it such that express looks for the file you are sending in your current directory
})

app.get("/attendance", (req, res) => { // this file is served instead when users visit the /attendance path instead of the default / path
    let options = {
        root: path.join(__dirname)
    };
    res.sendFile("ex7_list.html", options)
})

app.get("/remove", (req, res) => { // this file is served instead when users visit the /remove path instead of the default / path
    let options = {
        root: path.join(__dirname)
    };
    res.sendFile("ex7_remove.html", options)
})

// TODO: connect to your MongoDB client here
// define your student database and collection variables
// Hint: Example 6

app.post("/api/add", (req, res) => {
    // TODO: get the name and regNum values from this POST request
    // Hint: Example 2
    // TODO: do something with this info
    // create a student document (similar to creating an object last lesson)
    // and insert the student into the database
    res.send("success")
})

app.get("/api/attendance", (req, res) => {
    // TODO: Return a list of students
    // https://docs.mongodb.com/manual/tutorial/query-documents/#select-all-documents-in-a-collection
    // Be sure to select Node.JS as the language (top right) for the above link
    res.json({ // res.json sends a JSON response.
        // \JSON stands for Javascript Object Notation. These are the objects we learnt earlier in example 5.
        // they are enclosed in curly braces as shown
        // res.json is a function that accepts an object as its parameter.
        listOfStudents: students,
        numberOfStudents: students.regNum.length
    })
})

// Extension: Create an endpoint to remove students from your list given that their name is stored in req.query.name
// The endpoint should be called /api/remove
// What if the student is not currently in your list of students?

app.listen(port, () => {
  console.log(`Your app is listening at http://localhost:${port}`) // Exposes your backend on the port 3000
}) // Typically, the backend would be exposed across the Internet
// But for simplicity, we'll run it locally first (only WE can check it out)