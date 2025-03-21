import rooms from '../data/rooms.json' with { type: 'json' };

const travel = (req, res, next) => {
  res.render('rooms', { title: 'Rooms - Travlr Getaways Website Template', rooms});
};

export default travel;
