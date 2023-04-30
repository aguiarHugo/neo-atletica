import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'


const SocialMedia = () => {
  return (
    <div className="flex py-2 gap-7">
      <a
      className="hover:text-purple-100 transition duration-500"
      href="https://www.instagram.com/neoatletica/"
      target="_blank"
      rel="noreferrer"
      >
        <AiOutlineInstagram size={40}/>
      </a>

      <a
      className="hover:text-green-100 transition duration-500"
      href="https://wa.me/5522997710397"
      target="_blank"
      rel="noreferrer"
      >
        <AiOutlineWhatsApp size={40}/>
      </a>

      <a 
        className='hover:text-red-400 transition duration-500'
        href="https://www.google.com/maps/place/R.+Jos%C3%A9+C%C3%A2ndido+de+Almeida,+31+-+Ch%C3%A1cara+Para%C3%ADso,+Nova+Friburgo+-+RJ,+28605-310/data=!4m2!3m1!1s0x978acdbf960893:0x4fb3524a829e6af2?sa=X&ved=2ahUKEwiLkJrt5tH-AhXBLLkGHcR0AdgQ8gF6BAgIEAI"
        target="__blank"
      >
        <HiOutlineLocationMarker size={40} />
      </a>
    </div>
  )
}

export default SocialMedia