import Room from '../Models/rooms.js';

export const createRoom = async (req, res) => {
    try {
        const room = new Room(req.body);
        await room.save();
        res.status(201).json(room);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const changeRoomStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!['available', 'occupied'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status value' });
        }
        const room = await Room.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!room) return res.status(404).json({ message: 'Room not found' });
        res.json(room);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}