import express from "express";
import { postAnswer, deleteAnewer } from '../controllers/Answers.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.patch('/post/:id', auth, postAnswer)
router.patch('/delete/:id', auth, deleteAnewer)

export default router 