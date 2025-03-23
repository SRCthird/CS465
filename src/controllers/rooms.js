const controller = async (req, res, next) => {

  await fetch(
    `${req.protocol}://${req.get('host')}/api/rooms`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then(json => {
      res.render('rooms', { 
        title: 'Rooms - Travlr Getaways',
        active: 'rooms',
        rooms: json
      });
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
};

export default controller;
