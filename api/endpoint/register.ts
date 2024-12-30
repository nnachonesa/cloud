import { Router } from 'express';
import { upload } from '../fn/uploader';
import { UserAccount } from '../fn/user';
import { logger } from '../fn/logger';

const router: Router = Router()

router.post("/register", (req, res) => {
    const { username, password } = req.body
    if (username && password) {
        UserAccount.create(username, password).then((user) =>{
            res.send({user})
        }).catch((err) => {
            res.status(404).send({err})
        })
    } else res.status(404)
});

export default router;