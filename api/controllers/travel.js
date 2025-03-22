import mongoose from './db.js';

const Trip = mongoose.model('trip');

const controller = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error fetching trips:', err);
    res.status(500).json({ error: 'Failed to retrieve trips' });
  }
}

export default controller;
