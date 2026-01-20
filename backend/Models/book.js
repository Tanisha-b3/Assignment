import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, { timestamps: true })

export default mongoose.model('Booking', bookingSchema)
