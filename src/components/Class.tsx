type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[270px] md:h-[300px] w-[360px] md:w-[400px] flex-col items-center justify-center
  whitespace-normal bg-yellow-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="scroll relative mx-1 sm:mx-5 inline-block h-[340px] w-[360px] md:w-[400px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;