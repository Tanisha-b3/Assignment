import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import roomRoutes from './routes/rooms.js';
import bookingRoutes from './routes/book.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use("/api/rooms", roomRoutes);
app.use('/api/bookings', bookingRoutes)





mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blog-mern')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


export default app;