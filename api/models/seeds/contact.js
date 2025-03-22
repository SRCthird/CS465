import Mongoose from '../../controllers/db.js';
import Contact from '../contact.js';
import contacts from '../../data/contacts.json' with {type: 'json'};

const seedDB = async () => {
  await Contact.deleteMany({});
  await Contact.insertMany(contacts);
}

seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0)
})
