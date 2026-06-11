const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNzgwNjUzMTAxLCJleHAiOjE3ODA2NTY3MDF9.ZYjvqzpd3Wu-A8vOQPGGpxf6uFWP7mcxYPkGXEE-xHc";

const decoded = jwt.verify(token, process.env.JWT_SECRET);

console.log('Decoded JWT Payload:');
console.log(decoded);