import Mongoose from '../db.js';
import Room from '../room.js';
import rooms from '../../data/rooms.json' with {type: 'json'};

const seedDB = async () => {
  await Room.deleteMany({});
  await Room.insertMany(rooms);
}

seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0)
})
