const index = async (req, res, next) => {
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
      res.render('index', { 
        title: 'Travlr Getaways Website',
        active: 'index',
        // only show the second 2 stories
        news: json.slice(1, 3)
      });
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
};

export default index;
