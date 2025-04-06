import mongoose from './db.js';

const Contact = mongoose.model('contact');

export const getAll = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
}

export const getOne = async (req, res) => {
  try {
    const contacts = await Contact.findOne({'code': req.params.contactCode});
    if (!contacts) {
      return res.status(404).json({ error: 'No contact by that code'});
    }
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
}
