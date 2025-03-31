const ProjectCard = ({ title = "", thumbnail = "", link = "" }) => {
  return (
    <div className="bg-navy-500 group relative overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:scale-105">
      <a href={link} target="_blank">
        <div className="bg-navy-500/25 absolute top-0 left-0 h-full w-full transition-all duration-300 ease-in-out group-hover:opacity-0 max-sm:opacity-30"></div>
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="h-full w-full object-cover"
        />
      </a>
    </div>
  );
};

export default ProjectCard;
