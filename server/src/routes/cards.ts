import express from 'express';
import { authenticateToken } from '../middleware/auth';
import {
  createCard,
  getCards,
  getCard,
  updateCard,
  deleteCard,
} from '../controllers/cards';

const router = express.Router();

// Protected routes
router.use(authenticateToken);

router.post('/', createCard);
router.get('/', getCards);
router.get('/:id', getCard);
router.put('/:id', updateCard);
router.delete('/:id', deleteCard);

export default router; 