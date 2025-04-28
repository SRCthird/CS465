import { Router } from 'express';

import { login } from '../controllers/authentication';

var router = Router();

router.post('/', login);

export default router;
