const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const port = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(cors()); // Allow cross-origin requests

const { generalLimiter, authLimiter } = require('./middleware/rateLimit');
const authMiddleware = require('./middleware/auth');

const authRoutes = require('./routes/auth_routes');
const pageRoutes = require('./routes/page_routes');
const userRoutes = require('./routes/user_routes');

// Apply rate limiting
app.use('/api/auth', authLimiter); // Stricter for auth
app.use('/api', generalLimiter); // General for other API routes

app.use('/api/auth', authRoutes); // Auth routes (login/register) don't need auth middleware
app.use('/api/page', authMiddleware, pageRoutes); // Protect pages
app.use('/api/user', authMiddleware, userRoutes); // Protect users

app.get('/health', (req, res) => {
    res.json({status: 'ok'});
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Connect to DB and start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});



