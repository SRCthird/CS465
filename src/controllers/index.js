const index = (req, res, next) => {
  res.render('index', { title: 'Express' });
};

export default index;
