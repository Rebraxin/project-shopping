import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

import productRouter from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running with nodemon...');
});

app.use('/api/products', productRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'Unknow';

app.listen(
  PORT,
  console.log(`Server running in ${ENV} mode on port ${PORT}`.yellow.bold)
);
