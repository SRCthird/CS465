const controller = async (req, res, next) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      // Send contact to contact collection. Not implimented yet :)
      //await fetch(`${req.protocol}://${req.get('host')}/api/contacts`, {
      //  method: 'POST',
      //  headers: {
      //    'Accept': 'application/json',
      //    'Content-Type': 'application/json'
      //  },
      //  body: JSON.stringify({ name, email, subject, message })
      //});

      return res.redirect('/');
    } catch (err) {
      console.error('Failed to post contact form:', err);
      return res.status(500).send('Failed to send message');
    }
  }

  res.render('contact', {
    title: 'Contact - Travlr Getaways',
    active: 'contact'
  });
};

export default controller;
