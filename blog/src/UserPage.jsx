import React, { useEffect, useState } from 'react'
import api from './axios'

const UserPage = () => {
  const [rooms, setRooms] = useState([])
  const [form, setForm] = useState({
    username: '',
    phoneNo: '',
    roomId: '',
    date: ''
  })

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await api.get('/rooms')
      setRooms(res.data.filter(r => r.status === 'available'))
    }
    fetchRooms()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.post('/bookings', form)
      alert('Room booked successfully!')
      setForm({ username: '', phoneNo: '', roomId: '', date: '' })
    } catch (err) {
      console.error(err)
      alert('Booking failed')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Book a Room
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              name="username"
              placeholder="Enter your name"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              name="phoneNo"
              placeholder="Enter phone number"
              value={form.phoneNo}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Select Room
            </label>
            <select
              name="roomId"
              value={form.roomId}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Choose a room</option>
              {rooms.map(room => (
                <option key={room._id} value={room._id}>
                  Room {room.roomNo} - ₹{room.price}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Booking Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Book Room
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserPage
