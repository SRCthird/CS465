import { Router } from 'express';

import controller from '../controllers/contact.js';

var router = Router();

/* GET home page. */
router.get('/', controller);
router.post('/', controller);

export default router;
