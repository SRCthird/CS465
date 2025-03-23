import mongoose from './db.js';

const Meal = mongoose.model('meal');

export const getAll = async (req, res) => {
  try {
    const meals = await Meal.find({});
    res.status(200).json(meals);
  } catch (err) {
    console.error('Error fetching meals:', err);
    res.status(500).json({ error: 'Failed to retrieve meals' });
  }
}

export const getOne = async (req, res) => {
  try {
    const meals = await Meal.findOne({'name': req.params.mealCode});
    if (!meals) {
      return res.status(404).json({ error: 'No meal by that code'});
    }
    res.status(200).json(meals);
  } catch (err) {
    console.error('Error fetching meals:', err);
    res.status(500).json({ error: 'Failed to retrieve meals' });
  }
}
