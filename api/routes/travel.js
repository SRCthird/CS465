import { Router } from 'express';

import { getAll, getOne, addOne, updateOne } from '../controllers/travel.js';

var router = Router();

router.get('/', getAll);
router.post('/', addOne);
router.get('/:tripCode', getOne);
router.put('/:tripCode', updateOne);

export default router;
