import trips from '../data/trip.json' with { type: 'json' };

const travel = (req, res, next) => {
  res.render('travel', { title: 'Dive Sites - Bhaccasyoniztas Beach Resort', trips});
};

export default travel;
