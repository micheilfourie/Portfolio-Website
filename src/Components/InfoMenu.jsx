import { CircleProgressBar, LinearProgressBar } from "../index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const InfoMenu = () => {
  return (
    <div className="bg-navy-700 grid h-full w-full grid-rows-[250px_auto_60px] shadow-md">
      <div className="flex w-full flex-col items-center justify-center bg-gradient-to-tl from-[#23232D] to-[#252433] shadow-sm">
        <div className="mb-6 size-24 rounded-full bg-gray-400"></div>
        <h3 className="text-md mb-2 font-semibold text-white">
          Micheil Fourie
        </h3>
        <p className="text-sm text-gray-400">Front-End Developer</p>
        <p className="text-sm text-gray-400">Creative Designer</p>
      </div>

      <div className="scrollbar-hidden divide-navy-500 flex h-[calc(100vh-250px-60px-32px)] flex-col gap-4 divide-y overflow-y-scroll p-6 text-sm">
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
          <CircleProgressBar progress={94} title="Afrikaans" />
          <CircleProgressBar progress={86} title="English" />
        </div>

        <div className="flex flex-col gap-6 py-4 pb-8">
          <LinearProgressBar progress={78} title="HTML" />
          <LinearProgressBar progress={76} title="CSS" />
          <LinearProgressBar progress={80} title="JavaScript" />
          <LinearProgressBar progress={82} title="React" />
          <LinearProgressBar progress={72} title="Redux" />
          <LinearProgressBar progress={85} title="Tailwind" />
        </div>
      </div>

      <div className="flex items-center justify-center bg-gradient-to-tl from-[#23232D] to-[#252433] shadow-sm">
        <a href="" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="p-4 text-2xl text-white"
          />
        </a>

        <a href="" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="p-4 text-2xl text-white"
          />
        </a>
      </div>
    </div>
  );
};

export default InfoMenu;
