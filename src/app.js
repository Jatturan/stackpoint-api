import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import errorHandler from './middlewares/error.middleware.js';
import { NODE_ENV } from './config/index.js';
import connDB from './config/db.js';

// Connect database
connDB();

const app = express();

// Global middlewares
app.use(cors());

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Routes middlewares
app.use('/api/auth/v1/users', userRoutes);

// Custom middleware
app.use(errorHandler);

export default app;
