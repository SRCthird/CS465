const controller = (req, res, next) => {
  res.render('about', { 
    title: 'About - Travlr Getaways',
    active: 'about'
  });
};

export default controller;
