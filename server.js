const express = require("express");

const app = express();

app.use(express.json());

// Serve files from the current folder
app.use(express.static(__dirname));

// Student data
let students = [
    {
        rollno: "101",
        name: "Rahul Sharma",
        branch: "Computer Engineering"
    },
    {
        rollno: "102",
        name: "Priya Patil",
        branch: "Information Technology"
    },
    {
        rollno: "103",
        name: "Amit Joshi",
        branch: "Computer Engineering"
    }
];

// GET students
app.get("/students", function(req, res) {
    console.log("GET request received");
    res.json(students);
});

// POST student
app.post("/students", function(req, res) {

    console.log("POST request received");
    console.log(req.body);

    students.push(req.body);

    res.json({
        message: "Student added successfully",
        student: req.body
    });

});

app.listen(3000, function() {

    console.log("Server running at http://localhost:3000");

});
