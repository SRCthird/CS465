import { Router } from 'express';

import controller from '../controllers/index';

var router = Router();

/* GET home page. */
router.get('/', controller);

export default router;
