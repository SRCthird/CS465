const controller = async (req, res, next) => {
  await fetch(
    `${req.protocol}://${req.get('host')}/api/meals`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then(json => {
      res.render('meals', { 
        title: 'Meals - Travlr Getaways',
        active: 'meals',
        meals: json
      });
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
};

export default controller;
