import { Router } from 'express';
import { UserAccount } from '../fn/user';
import { logger } from '../fn/logger';

const router: Router = Router()

router.post("/login", (req, res) => {
    const { username, password } = req.body
    if (username && password) {
        UserAccount.login(username, password).then((user) => {
            res.send(user)
        }).catch((err) => {
             //@ts-ignore
             res.status(401).send( err.message )
        })
    } else res.status(404)
});

export default router;