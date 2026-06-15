const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write("Welcome to the home page");
        res.end();
    } 
    
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        let rs = fs.createReadStream("./15-06-26/about.html", 'utf-8');
        
        rs.on("data", (chunk) => {
            res.write(chunk); 
        });

        rs.on("error", (err) => {
            console.log(err);
            res.writeHead(500);
            res.end("Error loading the page");
        });

        rs.on("end", () => {
            res.end();
        });
        
    } 
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("404 Not Found");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
