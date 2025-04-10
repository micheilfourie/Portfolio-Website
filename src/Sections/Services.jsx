import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { servicesList } from "../data.js";

const Services = ({ handleScroll, contactRef }) => {
  return (
    <section className="-mt-5 flex w-full flex-col gap-4">
      <h4 className="text-xl font-bold tracking-wider text-white uppercase">
        Services
      </h4>
      <div className="grid w-full grid-cols-3 gap-4 max-md:grid-cols-1">
        {servicesList.map((item, index) => (
          <div
            key={index}
            className="to-navy-500 from-navy-600 relative flex w-full flex-col justify-between gap-4 overflow-hidden bg-gradient-to-tr p-6"
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] font-semibold tracking-wide text-white uppercase">
                {item.title}
              </h4>
              <p className="text-[14px] tracking-wide text-gray-400">
                {item.description}
              </p>
            </div>

            <button
              onClick={() => handleScroll(contactRef)}
              className="text-accent font-montserrat group group cursor-pointer text-start text-sm tracking-wider"
            >
              Get Quote
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 text-xs transition-all duration-300 ease-in-out group-hover:translate-x-1"
              />
            </button>
            <div className="absolute right-[-40px] -bottom-[40px] size-[150px]">
              <img
                src={item.image}
                alt="backdrop image"
                loading="lazy"
                className="opacity-1"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
