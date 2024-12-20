// server/server.js
import express, { json } from 'express';
import cors from 'cors';
const app = express();
const PORT = 5000;

// Enable CORS to allow the frontend to access the API
app.use(cors());
app.use(json());

// Import product data and routes
import productRoutes from './productController.js'; // Ensure the correct path
app.use('/products', productRoutes);

// Define a route for the root (/) to prevent "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Welcome to the Motorola API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
