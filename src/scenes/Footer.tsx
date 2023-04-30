import SocialMedia from '@/components/SocialMedia';
import logo from '../assets/logo-nobg.png'
import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer id='contato' className="bg-yellow-400 py-16">
      <motion.div className="justify-between mx-auto w-5/6 gap-16 md:flex"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contato)}
      >
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className='w-[100px]' alt="logo" src={logo} />
          <p className="my-5">
          Nossa missão é fornecer um ambiente acolhedor e motivador, equipamentos de 
          ponta, uma variedade de aulas e programas, além de um cuidado 
          individualizado para ajudar nossos membros a alcançar seus objetivos. 
          Queremos ser um destino para um estilo de vida saudável e equilibrado.
          </p>
          <p><span className='text-dark-400 font-bold'>©NEO Atlética Academia</span> todos os direitos reservados.</p>
        </div>
        <div className="flex flex-col mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a  href='/' className="my-4 hover:text-red-700 duration-500">Fabrica de Kimonos</a>
          <a  href='/' className="my-4 hover:text-red-700 duration-500">Loja de Suplementos</a>
          <a  href='/' className='mt-4 hover:text-red-700 duration-500'>Anna Carolina nutricionista</a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Fale Conosco!</h4>
          <SocialMedia />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;