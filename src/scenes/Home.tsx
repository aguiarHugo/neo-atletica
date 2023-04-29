import SocialMedia from '@/components/SocialMedia'
import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import mainImage from '../assets/BenefitsPageGraphic.png'
import redbull from '../assets/SponsorRedBull.png'
import forbes from '../assets/SponsorForbes.png'
import fortune from '../assets/SponsorFortune.png'
import { HiOutlineLocationMarker } from 'react-icons/hi'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  return (
    <section className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        <div className='z-10 md:basis-3/5'>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-dark-400 font-montserrat">NEO <span className='text-red-400'>Atlética</span></h1>
            <h3 className="text-2xl font-montserrat text-center">Academia</h3>
            <a href='https://www.google.com/maps/dir/-22.4184911,-42.9735495/R.+Jos%C3%A9+C%C3%A2ndido+de+Almeida,+31+-+Ch%C3%A1cara+Para%C3%ADso,+Nova+Friburgo+-+RJ,+28605-310/@-22.2401786,-43.0210498,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x978acdbf960893:0x4fb3524a829e6af2!2m2!1d-42.5229077!2d-22.2627752' target='__blank' className='mt-4 flex mx-auto justify-center gap-2 md:items-center'>
              <HiOutlineLocationMarker className='gps-icon' size={28} />Rua José Candido de Almeida, 31, Chácara do Paraíso.
            </a>
            <SocialMedia />
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={mainImage} alt="Mulher com roupa de ginástica" />
        </div>
      </div>
      
      { isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-yellow-400 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex items-center justify-between'>
              <img src={redbull} alt="redbull-patrocinador" />
              <img src={forbes} alt="forbes-patrocinador" />
              <img src={fortune} alt="fortune-patrocinador" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home