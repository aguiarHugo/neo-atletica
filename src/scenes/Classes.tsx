import { SelectedPage, ClassType } from "@/shared/types";
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
  return (
    <section id="aulas" className=" mw-full py-28 md:py-28">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Aulas)}
      >
        <motion.div
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
            Oferecemos uma variedade de aulas que são adequadas para 
            qualquer nível de condicionamento físico. Temos aulas de artes marciais, 
            como judô, jiu-jitsu e capoeira, que são ótimas para aprimorar a técnica, 
            aumentar a força e melhorar a flexibilidade. Também oferecemos aulas de dança, incluindo zumba e outras, que são divertidas e energizantes, além de serem uma ótima maneira de queimar calorias. Além disso, oferecemos aulas de treinamento funcional e de musculação, projetadas para ajudar a construir músculos e melhorar a resistência. Seja qual for o seu objetivo, 
            temos uma aula perfeita para você!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full scroll overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;