import { useState } from 'react'
import './App.css'
import Alert from './components/alert/Alert'
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
      <Second/>
      <Fourth/>
      <Fifth/>
    </div>
  )
}

export default App
