import { Router } from 'express';

import { getAll, getOne } from '../controllers/travel.js';

var router = Router();

// GET Method for all trips
router.get('/', getAll);
// GET Method for one trip based off code
router.get('/:tripCode', getOne);

export default router;
