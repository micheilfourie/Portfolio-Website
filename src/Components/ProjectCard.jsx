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
          loading="lazy"
          className="h-full w-full object-cover object-top brightness-90 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-100"
        />
      </a>
      <div className="to-navy-500 from-navy-600 absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-tr p-4 text-white transition-all duration-500 ease-in-out group-hover:translate-y-0 lg:translate-y-full">
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
