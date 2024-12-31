import { Router } from 'express';
import { HOME_PATH, LOCAL_PATH } from '../constants';
import PostSchema from '../schema/PostModel';
const router = Router();

router.get("/:key?", (req, res) => {
    if (!req.params.key) {
        res.sendFile(HOME_PATH);
    } else {
        PostSchema.findOne({ key: req.params['key'] }).then((post) => {
            if (post && post.Content?.data && post.Content?.contentType) {
                // Convertimos el dato a un buffer
                const buf = Buffer.from(post.Content.data);

                // Configuramos los encabezados para enviar la imagen
                res.setHeader('Content-Type', post.Content.contentType); // Asegúrate de que sea algo como 'image/jpeg'
                res.send(buf);
            } else {
                res.status(404).send("Post not found");
            }
        }).catch((err) => {
            console.error(err);
            res.status(500).send("Error al buscar el post");
        });
    }
});


export default router;