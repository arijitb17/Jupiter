import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Footer from './components/Footer'
import Cards from './components/Cards'
import Video from './components/Video'
import Sliders from './components/Sliders'

const App = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <Video />
      <Sliders />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
