import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Agreement from './pages/Agreement/Agreement'

function App() {

  return (
    <>
      <Header />
        <div className='content'>  
          <Routes>
            <Route path='/' element={<Agreement />} />
          </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App
