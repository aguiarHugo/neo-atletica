import Navbar from '@/scenes/Navbar'
import Home from '@/scenes/Home'
import Benefits from '@/scenes/Benefits'
import Classes from '@/scenes/Classes'
import Footer from '@/scenes/Footer'

import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'
import Aulas from './scenes/Aulas'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() =>{
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="app">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </section>
  )
}

export default App
