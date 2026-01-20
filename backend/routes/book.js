// routes/bookingRoutes.js
import express from 'express'
import Booking from '../Models/book.js'
import Room from '../Models/rooms.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { username, phoneNo, roomId, date } = req.body

    const booking = await Booking.create({
      username,
      phoneNo,
      room: roomId,
      date
    })
    await Room.findByIdAndUpdate(roomId, { status: 'occupied' })

    res.status(201).json(booking)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


export default router
