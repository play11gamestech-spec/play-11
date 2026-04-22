require('dotenv').config();
const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const { initDB } = require('./_src/config/db');
const authRoutes = require('./_src/routes/auth.routes');
const categoryRoutes = require('./_src/routes/category.routes');
const quizRoutes = require('./_src/routes/quiz.routes');
const matchRoutes = require('./_src/routes/match.routes');
const adminRoutes = require('./_src/routes/admin.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Database - Use try-catch to prevent startup crash
initDB().then(() => {
  console.log('Database initialization complete.');
}).catch(err => {
  console.error('Database initialization failed (non-fatal):', err);
});

// Routes - Standardized for Vercel Rewrites
// When using rewrites in vercel.json, /api/auth/... is redirected to api/index.js
// We use a router to handle all paths consistently.
const apiRouter = express.Router();

apiRouter.use('/auth', authRoutes);
apiRouter.use('/categories', categoryRoutes);
apiRouter.use('/quizzes', quizRoutes);
apiRouter.use('/matches', matchRoutes);
apiRouter.use('/admin', adminRoutes);

// Catch-all for API paths
app.use('/api', apiRouter);
app.use('/', apiRouter);

// Base Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'active', platform: 'Play11', timestamp: new Date().toISOString() });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Final Global Catch:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message,
    code: 'GLOBAL_CRASH_PREVENTED'
  });
});

// Start server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
