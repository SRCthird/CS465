import meals from '../data/meals.json' with { type: 'json' };

const controller = (req, res, next) => {
  res.render('meals', { title: 'Meals - Travlr Getaways', meals});
};

export default controller;
