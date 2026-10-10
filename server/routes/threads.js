import express from 'express';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

// Public route: Anyone can view threads
router.get('/', (req, res) => {
  // Your existing getThreads logic
  res.json({ message: "Public threads list" });
});

// Protected routes: Require valid JWT token
router.post('/', verifyToken, (req, res) => {
  // Example response or call your existing createThread controller
  res.status(201).json({ message: "Thread created successfully", user: req.user });
});

router.put('/:id', verifyToken, (req, res) => {
  res.json({ message: "Thread updated successfully" });
});

router.delete('/:id', verifyToken, (req, res) => {
  res.json({ message: "Thread deleted successfully" });
});

export default router;