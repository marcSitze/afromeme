import * as express from 'express';
import { auth } from '../middlewares/auth/auth';
import { createMedia, getMedia, getMedias, updateMedia } from '../controllers/media';
import { upload } from '../common/upload';



const router = express.Router();

router.post('/', upload.single('photo'), createMedia);
router.get('/:id', getMedia);
router.get('/', getMedias);
router.put('/:id', updateMedia);

export default router;