import { Router } from 'express';

import { getAll, getOne } from '../controllers/meal.js';

var router = Router();

// GET Method for all news
router.get('/', getAll);
// GET Method for one trip based off code
router.get('/:mealCode', getOne);

export default router;
