import { Router } from 'express';
import { HOME_PATH, LOCAL_PATH } from '../constants';

const router = Router();

router.get("/:id?", (req, res) => {
    console.log()
    if (!req.params.id) {
        res.sendFile(HOME_PATH);
    } else return res.status(200).sendFile(LOCAL_PATH + "/" + `${req.params['id']}`);
});

export default router;