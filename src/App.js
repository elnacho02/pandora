import { useState } from 'react'
import './App.css'
import Alert from './components/alert/Alert'
import First from './components/first/First'
import Modal from './components/Modal'
import Navbar from './components/navbar/Navbar'

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
    </div>
  )
}

export default App
