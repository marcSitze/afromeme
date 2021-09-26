import * as express from 'express';
import { createComment, getComment, getComments, updateComment } from '../controllers/comments';
import { auth } from '../middlewares/auth/auth';
const router = express.Router();


// Use the jsonewebtoken middleware
// router.use(auth);

router.post('/', auth, createComment);
router.get('/:id', auth, getComment);
router.get('/', auth, getComments);
router.put('/:id', auth, updateComment);

export default router;