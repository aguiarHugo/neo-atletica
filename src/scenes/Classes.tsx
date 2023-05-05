import { SelectedPage, ClassType } from "@/shared/types";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import useMediaQuery from "@/hooks/useMediaQuery";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HeadText from "@/components/HeadText";
import Class from "@/components/Class";

const classes: Array<ClassType> = [
  {
    name: "Judô",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Judô infantil",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image2,
  },
  {
    name: "Jiu-Jitsu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Capoeira",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Zumba",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image5,
  },
  {
    name: "Karatê",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Classes = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  let slidesPerView = 1;
  if (isAboveSmallScreens) {
    slidesPerView = 2;
  }
  if (isAboveMediumScreens) {
    slidesPerView = 3;
  }

  return (
    <section id="aulas" className="py-28">
      <motion.div
      >
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Aulas)}
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-full md:text-center">
            <HeadText>AULAS</HeadText>
            <p className="py-5">
            Oferecemos uma variedade de Classes que são adequadas para 
            qualquer nível de condicionamento físico. Temos Classes de artes marciais, 
            como judô, jiu-jitsu e capoeira, que são ótimas para aprimorar a técnica, 
            aumentar a força e melhorar a flexibilidade. Também oferecemos Classes de dança, incluindo zumba e outras, que são divertidas e energizantes, além de serem uma ótima maneira de queimar calorias. Além disso, oferecemos Classes de treinamento funcional e de musculação, projetadas para ajudar a construir músculos e melhorar a resistência. Seja qual for o seu objetivo, 
            temos uma aula perfeita para você!
            </p>
          </div>
        </motion.div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {classes.map((item: ClassType, index) => (
          <SwiperSlide key={`${item.name}-${index}`}>
            <Class
              name={item.name}
              description={item.description}
              image={item.image}
            />
            </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Classes;