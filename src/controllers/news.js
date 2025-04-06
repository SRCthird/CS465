const controller = async (req, res, next) => {
  await fetch(
    `${req.protocol}://${req.get('host')}/api/news`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then(json => {
      res.render('news', { 
        title: 'News - Travlr Getaways',
        active: 'news',
        news: json
      });
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
};

export default controller;
