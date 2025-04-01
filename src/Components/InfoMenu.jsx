import { CircleProgressBar, LinearProgressBar } from "../index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const InfoMenu = ({ menuOpen }) => {
  return (
    <div
      className={`bg-navy-700 top-[60px] z-30 grid h-screen w-[300px] flex-none grid-rows-[260px_auto_60px] shadow-md max-lg:fixed max-lg:h-[calc(100vh-60px)] ${menuOpen ? "right-0" : "right-[-300px]"} max-lg:transition-all max-lg:duration-500 max-lg:ease-in-out`}
    >
      <div className="flex w-full flex-col items-center justify-center bg-gradient-to-tr from-[#23232D] to-[#252433] py-6 shadow-sm">
        <div className="mb-6 size-24 rounded-full bg-gray-400"></div>
        <h3 className="text-md mb-2 font-semibold text-white">
          Micheil Fourie
        </h3>
        <p className="text-sm text-gray-400">Front-End Developer</p>
        <p className="text-sm text-gray-400">Creative Designer</p>
      </div>

      <div className="scrollbar-hidden divide-navy-500 flex flex-col gap-4 divide-y overflow-y-scroll p-6 text-sm">
        <div className="flex flex-col pb-4">
          <div className="flex justify-between">
            <p className="mb-2 text-white">Residence:</p>
            <p className="text-end text-gray-400">South Africa</p>
          </div>

          <div className="flex justify-between">
            <p className="mb-2 text-white">Age:</p>
            <p className="text-gray-400">27</p>
          </div>
        </div>

        <div className="flex justify-evenly py-4 pb-8">
          <CircleProgressBar progress={94} title="Afrikaans" delay={0} />
          <CircleProgressBar progress={86} title="English" delay={0.2} />
        </div>

        <div className="flex flex-col gap-6 py-4 pb-8">
          <LinearProgressBar progress={78} title="HTML" delay={0.4} />
          <LinearProgressBar progress={76} title="CSS" delay={0.5} />
          <LinearProgressBar progress={80} title="JavaScript" delay={0.6} />
          <LinearProgressBar progress={82} title="React" delay={0.7} />
          <LinearProgressBar progress={72} title="Redux" delay={0.8} />
          <LinearProgressBar progress={85} title="Tailwind" delay={0.9} />
        </div>
      </div>

      <div className="flex items-center justify-center bg-gradient-to-tr from-[#23232D] to-[#252433] shadow-sm">
        <a href="https://www.linkedin.com/in/micheil-fourie/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="p-4 text-3xl text-white transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:scale-110 hover:text-[#ffffff]"
          />
        </a>

        <a href="https://github.com/micheilfourie/" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="p-4 text-3xl text-white transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:scale-110 hover:text-[#ffffff]"
          />
        </a>
      </div>
    </div>
  );
};

export default InfoMenu;
