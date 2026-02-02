
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import compressRouter from './routes/compress.route.js';
import { errorHandler } from './middleware/errorHandler.js';
import { rateLimiter } from './middleware/rateLimit.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*',
  methods: ['POST'],
  exposedHeaders: ['Content-Disposition']
}));

// Rate limiting
app.use('/api/', rateLimiter);

// Body parsing
app.use(express.json());

// Routes
app.use('/api/compress', compressRouter);

// Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
