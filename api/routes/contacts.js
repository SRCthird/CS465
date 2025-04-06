import { Router } from 'express';

import { getAll, getOne } from '../controllers/contact.js';

var router = Router();

// GET Method for all contacts 
router.get('/', getAll);
// GET Method for one contact based off code
router.get('/:contactCode', getOne);

export default router;
