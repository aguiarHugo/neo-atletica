import Navbar from '@/scenes/Navbar'
import Home from '@/scenes/Home'

import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types'

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
    <section className="app bg-dark-100">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div id='home' className=' py-12' />
      <Home
        setSelectedPage={setSelectedPage}
      />
    </section>
  )
}

export default App
