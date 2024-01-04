import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Compaines from './components/Compaines/Compaines'
import Residencies from './components/Residencies/Residencies'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
import Getstarts from './components/Getstarts/Getstarts'
import Footer from './components/Footer/Footer'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
       <Header/>
       <Hero/>
       <Compaines/>
       <Residencies/>
       <Value/>
       <Contact/>
       <Getstarts/>
       <Footer/>
     </div>
    </>
  )
}

export default App
