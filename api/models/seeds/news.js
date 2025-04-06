import Mongoose from '../../controllers/db.js';
import News from '../news.js';
import news from '../../../src/data/news.json' with {type: 'json'};

const seedDB = async () => {
  await News.deleteMany({});
  await News.insertMany(news);
}

seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0)
})
