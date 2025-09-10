const express = require('express');
const path = require('path');

const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Serve the HTML file at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});