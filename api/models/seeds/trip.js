import Mongoose from '../../controllers/db.js';
import Trip from '../trip.js';
import trips from '../../../src/data/trip.json' with {type: 'json'};

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
}

seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0)
})
