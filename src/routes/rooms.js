import { Router } from 'express';

import controller from '../controllers/rooms.js';

var router = Router();

/* GET home page. */
router.get('/', controller);

export default router;
