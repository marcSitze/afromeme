import * as express from 'express';
import { auth } from '../middlewares/auth/auth';
import { createMedia, getMedia, getMedias, updateMedia } from '../controllers/media';



const router = express.Router();

router.post('/', createMedia);
router.get('/:id', getMedia);
router.get('/', getMedias);
router.put('/:id', updateMedia);

export default router;