const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to My Basic Microservice!",
        status: "Running successfully"
    });
});
 
// Sample API endpoint
app.get('/api/greet/:name', (req, res) => {
    const name = req.params.name;
    res.json({
        greeting: `Hello ${name}, welcome to the microservice!`
    });
});
 
// Health check endpoint
app.get('/health', (req, res) => {
    res.send("Service is healthy");
});
 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
