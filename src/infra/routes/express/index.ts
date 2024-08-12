import { Router } from 'express';
import { signupRoutes } from './signup.routes';

const router = Router();

router.use('/v1',signupRoutes);

export { router };