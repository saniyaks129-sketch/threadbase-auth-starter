import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes and middleware
import authRoutes from './routes/auth.js';
import threadRoutes from './routes/threads.js';
import verifyToken from './middleware/verifyToken.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Global Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api/threads', threadRoutes);

// Task 5: Protected route GET /api/me to return decoded token user info
app.get('/api/me', verifyToken, (req, res) => {
  res.json(req.user);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;