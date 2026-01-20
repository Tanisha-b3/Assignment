import express from 'express';
import { changeRoomStatus, createRoom,  getRooms,} from '../Controller/rooms.js';

const router = express.Router();

router.post('/', createRoom);
router.get('/', getRooms);
router.patch('/:id/status', changeRoomStatus);

export default router;