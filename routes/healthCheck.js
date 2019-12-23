import express from 'express';
import healtCheck from '../controllers/healthController';

const router = express.Router();

router.get('/health-check', healtCheck);

export default router;