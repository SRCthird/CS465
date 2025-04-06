import { Router } from 'express';

import { getAll, getOne } from '../controllers/meal.js';

var router = Router();

// GET Method for all meals 
router.get('/', getAll);
// GET Method for one meal based off code
router.get('/:mealCode', getOne);

export default router;
