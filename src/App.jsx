import React from 'react'
import FooterInit from './Components/Footer/FooterInit'
import Gallery from './Components/Gallery/Gallery'
import Navbar from './Components/Navigation/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <div style={{"height": "15rem"}}></div>
      <FooterInit />
    </div>
  )
}

export default App