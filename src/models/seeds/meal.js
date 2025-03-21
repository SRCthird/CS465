import Mongoose from '../db.js';
import Meal from '../meal.js';
import meals from '../../data/meals.json' with {type: 'json'};

const seedDB = async () => {
  await Meal.deleteMany({});
  await Meal.insertMany(meals);
}

seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0)
})
