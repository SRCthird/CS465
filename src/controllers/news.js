import news from '../data/news.json' with { type: 'json' };

const controller = (req, res, next) => {
  res.render('news', { title: 'News - Travlr Getaways', news});
};

export default controller;
