const travel = async (req, res, next) => {

  await fetch(
    `${req.protocol}://${req.get('host')}/api/travel`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then(json => {
      res.render('travel', {
        title: 'Dive Sites - Bhaccasyoniztas Beach Resort',
        active: 'travel',
        trips: json
      });
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
};

export default travel;
