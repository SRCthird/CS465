import { Router } from 'express';

import { register } from '../controllers/authentication';

var router = Router();

router.post('/', register);

export default router;
