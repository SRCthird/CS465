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
    const trips = await Trip.findOne({ 'code': req.params.tripCode });
    if (!trips) {
      return res.status(404).json({ error: 'No trip by that code' });
    }
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error fetching trips:', err);
    res.status(500).json({ error: 'Failed to retrieve trips' });
  }
}

export const addOne = async (req, res) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });
    res.status(201).json(trip);
  } catch (err) {
    console.error('Error posting trip:', err);
    res.status(400).json({ error: err.message });
  }
}

export const updateOne = async (req, res) => {
  console.log(req.params);
  console.log(req.body);

  try {
    const updatedTrip = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true }
    ).exec();

    if (!updatedTrip) {
      return res.status(404).json({ error: 'Trip not found' });
    }
    return res.status(200).json(updatedTrip);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
