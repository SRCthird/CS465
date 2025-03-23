import mongoose from './db.js';

const Room = mongoose.model('room');

export const getAll = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (err) {
    console.error('Error fetching rooms:', err);
    res.status(500).json({ error: 'Failed to retrieve rooms' });
  }
}

export const getOne = async (req, res) => {
  try {
    const rooms = await Room.findOne({'name': req.params.roomCode});
    if (!rooms) {
      return res.status(404).json({ error: 'No room by that code'});
    }
    res.status(200).json(rooms);
  } catch (err) {
    console.error('Error fetching rooms:', err);
    res.status(500).json({ error: 'Failed to retrieve rooms' });
  }
}
