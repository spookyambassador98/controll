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
app.get('/', (req, res) => {
  const ip = req.ip || req.connection.remoteAddress;
  res.render('index', { ip }); // Pass the 'ip' variable to the Pug template
});

// Route to handle control actions using GET and POST methods
app.all('/control', (req, res) => {
  if (req.method === 'GET') {
    // Respond with an error for GET requests
    res.status(405).json({ error: 'Method Not Allowed', message: 'Use POST method for /control' });
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
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
