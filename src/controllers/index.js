const index = (req, res, next) => {
  res.render('index', { 
    title: 'Express',
    active: 'index'
  });
};

export default index;
