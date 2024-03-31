const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');


const app = express();
const port = 2453;
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
