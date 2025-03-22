import news from '../data/news.json' with { type: 'json' };

const index = (req, res, next) => {
  res.render('index', { 
    title: 'Travlr Getaways Website',
    active: 'index',
    // only show the second 2 stories
    news: news.slice(1, 3)
  });
};

export default index;
