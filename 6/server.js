const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
    // Serve index.html by default
    let filePath = path.join(publicDirectoryPath, 'index.html');

    // Check if requested file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.statusCode = 404;
            res.end('404 Not Found');
            return;
        }

        // Read the file and serve
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
                return;
            }

            // Set appropriate Content-Type
            let contentType = 'text/html';
            if (filePath.endsWith('.css')) {
                contentType = 'text/css';
            } else if (filePath.endsWith('.js')) {
                contentType = 'application/javascript';
            }

            res.setHeader('Content-Type', contentType);
            res.end(data);
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});