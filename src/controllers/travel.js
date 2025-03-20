import trips from '../data/trip.json' with { type: 'json' };

const travel = (req, res, next) => {
  res.render('travel', { title: 'Travel Gateways', trips});
};

export default travel;
