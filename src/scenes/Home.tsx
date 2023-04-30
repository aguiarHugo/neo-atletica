import SocialMedia from '@/components/SocialMedia'
import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import mainImage from '../assets/BenefitsPageGraphic.png'
import redbull from '../assets/SponsorRedBull.png'
import forbes from '../assets/SponsorForbes.png'
import fortune from '../assets/SponsorFortune.png'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  return (
    <section id='home' className='gap-16 pt-32 md:h-full md:pb-0'>
      <motion.div 
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className='z-10 md:basis-3/5'>
          <motion.div 
            className="flex flex-col justify-center items-center"
            initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
          >
            <h1 className="text-4xl font-bold text-dark-400 font-montserrat md:text-7xl">NEO <span className='text-red-400'>Atlética</span></h1>
            <h3 className="text-2xl font-montserrat text-center">Academia</h3>
            <SocialMedia />
          </motion.div>
        </div>
        <div className='flex justify-center'>
          <img src={mainImage} alt="Mulher com roupa de ginástica" />
        </div>
      </motion.div>
      
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