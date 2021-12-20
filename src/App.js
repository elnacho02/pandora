import { useState } from 'react'

import './App.css'
import Alert from './components/alert/Alert'
import One from './components/carousel/One.jsx'
import Two from './components/carousel/Two.jsx'
import Three from './components/carousel/Three.jsx'
import Fifth from './components/fifth/Fifth'
import First from './components/first/First'
import Fourth from './components/fourth/Fourth'
import Modal from './components/Modal'
import Navbar from './components/navbar/Navbar'
import Second from './components/second/Second'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='App'>
      <Navbar />
      <First setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen ? (
        <Modal>
          <Alert setIsOpen={setIsOpen} />
        </Modal>
      ) : null}
      <Second />
      <One />
      <Two />
      <Three />
      <Fourth />
      <Fifth />
    </div>
  )
}

export default App
