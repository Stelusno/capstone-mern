import mongoose from 'mongoose'

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not defined.');
  }
  
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
	console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
});