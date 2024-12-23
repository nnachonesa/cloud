import { Router } from 'express';
import { upload } from '../fn/uploader';

const router: Router = Router()
   
router.post("/upload", upload.single('image'), (req, res) => {
    if (req.file) {
        res.status(200).redirect(`/${req.file.filename}`);
        /**
         * req.file.path
         * solucion al refresco infinito: redireccionar a una pagina normal
         */
    } else res.status(404)
});

export default router;