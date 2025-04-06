import mongoose from './db.js';

const Trip = mongoose.model('trip');

export const getAll = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error fetching trips:', err);
    res.status(500).json({ error: 'Failed to retrieve trips' });
  }
}

export const getOne = async (req, res) => {
  try {
    const trips = await Trip.findOne({'code': req.params.tripCode});
    if (!trips) {
      return res.status(404).json({ error: 'No trip by that code'});
    }
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error fetching trips:', err);
    res.status(500).json({ error: 'Failed to retrieve trips' });
  }
}
