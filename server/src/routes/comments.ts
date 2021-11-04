import * as express from 'express';
import { createComment, getComment, getComments, updateComment } from '../controllers/comments';
import { auth } from '../middlewares/auth/auth';
const router = express.Router();


// Use the jsonewebtoken middleware
// router.use(auth);

router.post('/', createComment);
router.get('/:id', getComment);
router.get('/', getComments);
router.put('/:id', auth, updateComment);

export default router;