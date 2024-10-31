import React from 'react'
import {AboutUs,Chef,Findus,Footer,Gallery,Header,Intro,Laurels,Menu} from './container'
import {Navbar} from './components'
import './App.css'

function App() {
  

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />

  </div>
    
  )
}

export default App
