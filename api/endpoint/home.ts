import { Router } from 'express';
import { HOME_PATH } from '../constants';

const router = Router();

router.get("/", (req, res) => {
    res.status(200).sendFile(HOME_PATH)
});

export default router;