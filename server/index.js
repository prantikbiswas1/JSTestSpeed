const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Define a route for the download endpoint
app.get('/downloads', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'downloads', "Server.PNG"); // Change 'downloads' to your actual directory containing the files to be downloaded

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Set the appropriate headers for the download
        res.setHeader('Content-Disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-Type', 'application/octet-stream');

        // Stream the file to the response
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } else {
        // If the file doesn't exist, send a 404 response
        res.status(404).send('File not found');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
