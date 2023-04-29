import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import Logo from '@/assets/logo-nobg.png'
import Link from '@/components/Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = 'flex items-center justify-between'
  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px')
  const navbarBackground = isTopOfPage ? 'bg-dark-100' : 'bg-yellow-400 drop-shadow'

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-full px-16`}>
          <div className={`${flexBetween} w-full`}>
            <img className='w-16' src={Logo} alt="Logo" />
          </div>
          
          {isAboveMediumScreens ? (
            <div className={`${flexBetween}`}>
            <div className={`${flexBetween} gap-8 text-md`}>
              <Link 
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Benefícios'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Aulas'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Contato'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
          ) : (
            <button 
              className='rounded-full bg-yellow-400 p-2'
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <Bars3Icon className='h-6 w-6 text-white'/>
            </button>
            
          )}
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && menuToggle && (
        <div className='fixed w-full h-full top-0 z-40 bg-yellow-400  drop-shadow-xl menu-slideFromTop'>
          <div className='flex justify-end py-[3.3rem] pr-[4.5rem]'>
            <button 
                onClick={() => setMenuToggle(!menuToggle)}
            >
              <XMarkIcon className='h-7 w-7 text-red-400 '/>
            </button>
          </div>
          <div className='flex flex-col items-center gap-12 text-xl'>
              <Link 
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Benefícios'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Aulas'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Contato'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar