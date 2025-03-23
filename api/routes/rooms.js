import { Router } from 'express';

import { getAll, getOne } from '../controllers/room.js';

var router = Router();

// GET Method for all rooms
router.get('/', getAll);
// GET Method for one trip based off code
router.get('/:roomCode', getOne);

export default router;
