import React, { useEffect, useState } from 'react'
import api from './axios'
import { useNavigate } from 'react-router-dom';

const Room = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState([])

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await api.get('/rooms')
        setRoom(response.data)
      } catch (error) {
        console.error('Error fetching rooms:', error)
      }
    }

    fetchRoom()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Rooms</h1>

      {room.length === 0 ? (
        <>
        <p className="text-gray-500">No rooms available</p>
        <button
          onClick={() => navigate("/create-room")}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          CreateRoom
        </button>
        </>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {room.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Room No: {item.roomNo}
              </h2>

              <p className="text-gray-600 mb-1">
                Price: <span className="font-medium text-black">₹{item.price}</span>
              </p>

              <p className="text-gray-600">
                Status:{' '}
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    item.status === 'available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {item.status}
                </span>
              </p>
            </div>
          ))}
          <button
            onClick={() => navigate("/create-room")}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            CreateRoom
          </button>
          <button
            onClick={() => navigate("/user")}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Book Room
          </button>
        </div>
      )}
    </div>
  )
}

export default Room
