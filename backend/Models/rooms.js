import mongoose from "mongoose";

const RoomSchema = mongoose.Schema({
    roomNo: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['available', 'occupied'], default: 'available' },
}, { timestamps: true });

const Room = mongoose.model('Room', RoomSchema);

export default Room;