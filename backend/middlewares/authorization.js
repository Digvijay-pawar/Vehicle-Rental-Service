import jwt from 'jsonwebtoken';

// Authorization middleware
const authorize = (req, res, next) => {
    // Check if the Authorization header exists
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    // Extract token from header
    const token = authHeader.split(' ')[1]; // Bearer <token>
    if (!token) {
      return res.status(401).json({ message: 'Token missing' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }
      // Attach user data to the request object
      req.userId = user.userId;

      

      next(); // Proceed to the next middleware or route handler
    });
  };

export default authorize;
