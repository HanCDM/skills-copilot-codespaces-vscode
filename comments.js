// Create web server
// 1. npm init -y
// 2. npm install express
// 3. node comments.js
// 4. Open browser and go to localhost:3000/comments
// 5. Open Postman and send a GET request to localhost:3000/comments

const express = require('express');
const app = express();
const comments = [
    { username: 'Tam', comment: 'Hello' },
    { username: 'Cam', comment: 'Hi' },
    { username: 'Sam', comment: 'Hey' },
    { username: 'Pam', comment: 'Hola' },
    { username: 'Lam', comment: 'Bonjour' },
];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});