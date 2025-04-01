const ProjectCard = ({ title = "", thumbnail = "", link = "" }) => {
  return (
    <div className="bg-navy-500 group relative overflow-hidden shadow-md transition-all duration-300 ease-in-out">
      <a href={link} target="_blank">
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="h-full w-full object-cover object-top brightness-75 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-100"
        />
      </a>
    </div>
  );
};

export default ProjectCard;
