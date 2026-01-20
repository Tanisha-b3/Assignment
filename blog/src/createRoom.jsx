import React, { useState } from 'react'
import api from './axios'

const CreateRoom = () => {
  const [form, setForm] = useState({
    roomNo: '',
    price: '',
    status: 'available'
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.post('/rooms', form)
      alert('Room added successfully')

      setForm({
        roomNo: '',
        price: '',
        status: 'available'
      })
    } catch (error) {
      console.error('Error adding room:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Room
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Room Number
            </label>
            <input
              type="text"
              name="roomNo"
              placeholder="Enter room number"
              value={form.roomNo}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Price (₹)
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Room Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Add Room
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateRoom
