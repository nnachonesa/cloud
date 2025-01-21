import { Router } from 'express';
import { upload } from '../fn/uploader';
import PostSchema from '../schema/PostModel';
import { readFile, readFileSync, rm, rmSync } from 'fs';

const router: Router = Router()

router.post("/upload", upload.single('video'), async (req, res) => {
    if (req.file) {
        res.status(200).redirect(`/${req.file.filename.split('.')[0]}`);
        (await PostSchema.create({
            key: req.file.filename.split(".")[0],
            Content: {
                data: await readFileSync(req.file.path),
                contentType: req.file.mimetype
            },
            UserIP: req.ip
        })).save().then(async () =>{
            await rmSync(`${req.file?.path}`);
        })
        /**
         * req.file.path retorna la path entera de donde se guarda la imagen
         * solucion al refresco infinito: redireccionar a una pagina normal
         */
    } else res.status(404)
});

export default router;
