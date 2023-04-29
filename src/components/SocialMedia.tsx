import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'


const SocialMedia = () => {
  return (
    <div className="flex justify-center my-10 gap-7">
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
    </div>
  )
}

export default SocialMedia