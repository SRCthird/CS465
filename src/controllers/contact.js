import contact from '../data/contacts.json' with { type: 'json' };

const controller = (req, res, next) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    contact.push({ name, email, subject, message });
    return res.redirect('/');
  }
  console.log(contact)
  res.render('contact', { 
    title: 'Contact - Travlr Getaways',
    active: 'contact'
  });
};

export default controller;
