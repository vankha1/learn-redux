import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Agreement from './pages/Agreement/Agreement'
import Question from './pages/Questions/Question'
import ChangeMind from './pages/ChangeMind/ChangeMind'
import Submit from './pages/Submit/Submit'

function App() {

  return (
    <>
      <Header />
        <div className='content'>  
          <Routes>
            <Route path='/' element={<Agreement />} />
            <Route path='/questions/:id' element={<Question />} />
            <Route path='/change-mind' element={<ChangeMind />} />
            <Route path='/form-submit' element={<Submit />} />
          </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App
