const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory to the "views" folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route for the root path
app.all('/', (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;
  
  if (req.method === 'GET') {
    // Display IP address
    res.render('index', { ip });
  } else if (req.method === 'POST') {
    const action = req.body.action;
    console.log(`Received action: ${action}`);

    // Perform actions based on 'action' value (e.g., turn on or off)

    // Send a response back to the client (you can customize this response)
    res.json({ status: 'success', message: `Received action: ${action}` });
  }
});

// Use the dynamic port assigned by Render
const PORT = process.env.PORT || 3333;
const HOST = '0.0.0.0'; // Listen on all available network interfaces
app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
