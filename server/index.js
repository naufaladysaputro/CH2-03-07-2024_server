// console.log("Implement servermu disini yak 😝!");

// core package => built in node js
const http = require("http");
const fs = require("fs");
const path = require("path");

// third party package
const url = require("url");

const  PUBLIC_DIR = path.join(__dirname, "../public");
const PORT = 8000;

const server = (req, res) => {
    // localhost:8000
    if (req.url ==='/') {
        res.end('INI DEFAULT SERVER');
    }
    // localhost:8000/search
    else if (req.url === '/search') {
        res.end('ini halaman search');
    } else {
        res.end("gak ada....");
    }
};

http.createServer(server).listen(PORT);
console.log(`Server is running ... PORT : localhost:${PORT}`);