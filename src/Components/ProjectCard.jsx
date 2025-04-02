import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({
  title = "",
  thumbnail = "",
  link = "",
  gitLink = "",
}) => {
  return (
    <div className="bg-navy-500 group relative overflow-hidden shadow-md transition-all duration-300 ease-in-out">
      <a href={link}>
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="h-full w-full object-cover object-top transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-100 max-sm:brightness-100 min-sm:brightness-80"
        />
      </a>
      <div className="to-navy-500 from-navy-600 absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-tr p-5 text-white transition-all duration-500 ease-in-out group-hover:translate-y-0 sm:translate-y-full">
        <a href={link} className="hover:underline">
          {title}
        </a>
        <a
          href={gitLink}
          className="transition-all duration-300 ease-in-out hover:scale-110"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl text-white" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
