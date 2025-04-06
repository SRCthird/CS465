import { Router } from 'express';

import { getAll, getOne } from '../controllers/news.js';

var router = Router();

// GET Method for all news
router.get('/', getAll);
// GET Method for one article based off code
router.get('/:newsCode', getOne);

export default router;
