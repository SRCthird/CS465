import 'dotenv/config';
import process from 'process';
import mongoose from 'mongoose';
import readLine from 'readline';

const host = process.env.MONGO_HOST || '127.0.0.1';
const database = process.env.MONGO_DATABASE || 'travlr';
const dbURI = `mongodb://${host}/${database}`;

const connect = async () => {
  try {
    await mongoose.connect(dbURI, {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      tls: process.env.MONGO_TLS === 'true',
    });
    console.log('Initial MongoDB connection established.');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

// Monitor connection events
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Windows specific listner
if (process.platform === 'win32') {
  const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  r1.on('SIGINT', () => {
    process.emit("SIGINT");
  });
}

// Configure for Graceful Shutdown
const gracefulShutdown = (msg) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
  });
};

// Event Listeners to process graceful shutdowns
// Shutdown invoked by nodemon signal
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart');
  process.kill(process.pid, 'SIGUSR2');
});

// Shutdown invoked by app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination');
  process.exit(0);
});

// Shutdown invoked by container termination
process.on('SIGTERM', () => {
  gracefulShutdown('app shutdown');
  process.exit(0);
});

// Make initial connection to DB
connect();

// Import Mongoose schema
import '../models/trip.js';
import '../models/contact.js';
import '../models/meal.js';
import '../models/news.js';
import '../models/room.js';

export default mongoose;
