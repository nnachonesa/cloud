import { Router } from 'express';
import { upload } from '../fn/uploader';

const router: Router = Router()
   
router.post("/upload", upload.single('image'), (req, res) => {
    if (req.file) {
        res.send(`Imagen subida con éxito: ${req.file.path}`);
    } else res.status(404)
});

export default router;