import mongoose from './db.js';

const News = mongoose.model('news');

export const getAll = async (req, res) => {
  try {
    const news = await News.find({});
    res.status(200).json(news);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Failed to retrieve news' });
  }
}

export const getOne = async (req, res) => {
  try {
    const news = await News.findOne({'code': req.params.newsCode});
    if (!news) {
      return res.status(404).json({ error: 'No news by that code'});
    }
    res.status(200).json(news);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Failed to retrieve news' });
  }
}
