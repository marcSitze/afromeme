import express, { Router } from 'express';
const router: Router = express.Router();
import { getUsers, getUserById, createUser, getUser, updateUser, login } from '../controllers/users';

/*======================
        Get all users
======================== */
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/q?', getUser);
router.put('/:id', updateUser);
router.post('/login', login);
// router.get('/account', auth, (req, res) => res.send('hello account'));

/*===============================
        Get an individual user
================================= */
router.get('/:id', getUserById);
export default router;