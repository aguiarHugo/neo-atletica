import HeadText from '@/components/HeadText'
import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery'
import Benefit from '@/components/Benefit'


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Instalação Moderna",
    description:
      "A nossa academia é uma instalação moderna, com uma localização privilegiada e de fácil acesso, situada no coração da Chácara do Paraíso. Com equipamentos de última geração, um ambiente acolhedor e aconchegante, e uma equipe de profissionais dedicados e experientes, aqui você encontra tudo o que precisa para alcançar seus objetivos de forma prática, eficiente e agradável. Venha nos visitar e conheça a nossa academia!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Aulas diversificadas",
    description:
      "Oferecemos uma ampla variedade de aulas, incluindo judô, jiu-jitsu, capoeira, zumba e muitas outras modalidades. Acreditamos que a diversidade é essencial para atender às necessidades e interesses de nossos alunos, e é por isso que temos uma ampla gama de opções de aulas disponíveis em nossa academia. Seja qual for o seu objetivo de fitness, temos a aula certa para ajudá-lo a alcançá-lo. Venha experimentar e encontre a aula que mais combina com você!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Profissionais Especializados",
    description:
      "Nossos treinadores são especialistas em fitness e profissionais altamente qualificados, com anos de experiência em ajudar pessoas a alcançarem seus objetivos de saúde e bem-estar. Com suas habilidades, conhecimentos e entusiasmo contagiantes, eles vão te guiar em cada etapa do seu trajeto, oferecendo suporte, motivação e aconselhamento personalizado para ajudá-lo a alcançar os melhores resultados possíveis.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const amount = isAboveMediumScreens ? 0.5 : 0.2


  return (
    <section id='benefícios' className='mx-auto min-h-full w-5/6 pt-28 md:pt-24'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefícios)}
      >
        {/* HEADER */}
        <div className='md:my-5 md:text-center'>
          <HeadText>
            MAIS DO QUE SOMENTE UMA ACADEMIA
          </HeadText>
          <p className='my-5 text-sm'>
            Na nossa academia, você encontra equipamentos de todos os tipos, 
            treinadores experientes e aulas de alta qualidade para te ajudar a 
            alcançar seus objetivos de forma fácil e eficaz. Mas não é só isso: 
            aqui na nossa academia, valorizamos cada um dos nossos membros e 
            oferecemos um atendimento personalizado e atencioso para garantir 
            que você se sinta motivado e bem cuidado em todas as etapas do seu 
            trajeto fitness.
          </p>
        </div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Benefits