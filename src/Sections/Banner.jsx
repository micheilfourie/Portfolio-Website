import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const bannerItems = [
  {
    highlight: "10y+",
    description: "Coding Experience",
  },
  {
    highlight: "4y+",
    description: "Design Experience",
  },
  {
    highlight: "180+",
    description: "Completed Projects",
  },
  {
    highlight: <FontAwesomeIcon icon={faCircleCheck} className="text-2xl" />,
    description: "Front-End Certified",
  },
];

const Banner = () => {
  return (
    <section className="mx-auto grid w-full grid-cols-4 items-center gap-2 max-lg:gap-y-6 max-md:mt-8 max-md:grid-cols-2 md:mt-12">
      {bannerItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h6 className="text-accent text-center text-xl font-[800] tracking-wider">
            {item.highlight}
          </h6>
          <p className="text-center text-[15px] text-gray-400 max-sm:text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Banner;
