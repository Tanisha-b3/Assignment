import './App.css'
import CreateRoom from './createRoom'
import Room from './Room'
import UserPage from './UserPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/create-room" element={<CreateRoom />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
