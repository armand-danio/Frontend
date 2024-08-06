const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "assessment" directory
app.use(express.static(path.join(__dirname, 'assessment')));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assessment', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
