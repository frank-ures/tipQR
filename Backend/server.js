const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
    

// Simple test route
app.get('/', (req, res) => {
    res.send('TipQR Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('TipQR Server is running!');
});

mongoose.connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));




app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
        process.exit(0);
    } catch (error) {
        console.error('Error during shutdown:', error);
        process.exit(1);
    }
});
*/