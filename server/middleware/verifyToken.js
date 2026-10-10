import jwt from 'jsonwebtoken';

export default function verifyToken(req, res, next) {
  // Read token from Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  // Return 401 if no token is provided
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    // Verify token using JWT_SECRET from .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user payload to request
    next();
  } catch (err) {
    // Return 401 if token is invalid or expired
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}