import './App.css'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Components/User/Register'
import Submitted from './Components/User/Submitted'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/submitted' element={<Submitted />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
