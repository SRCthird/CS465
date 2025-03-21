import trips from '../data/trip.json' with { type: 'json' };

const travel = (req, res, next) => {
  res.render('travel', {
    title: 'Dive Sites - Bhaccasyoniztas Beach Resort',
    active: 'travel',
    trips
  });
};

export default travel;
