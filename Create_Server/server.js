const http = require("http");

// Create a file system
const fs = require('fs').promises;

// Using the http variable, create a new server
const server = function(req, res) {
    
    // Use the fs.readFile method to load the file.
    fs.readFile(__dirname + "/index.html")

    // Return the content of the HTML file
        .then(contents => {
            // Header, set content-type and status code, then the content
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err.message);
            return;
        });
};

console.log("Server created successfully");