import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
  res.status(404).send('not ok.')
});


export default router;
