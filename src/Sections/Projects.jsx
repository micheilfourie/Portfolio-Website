import { ProjectCard } from "../index.js";

const projectList = [
  {
    title: "Furnature E-Commerce",
    thumbnail: "https://via.placeholder.com/150",
    link: "https://micheilfourie.github.io/Furniture-Shop-Website/",
  },
  {
    title: "Travel Website",
    thumbnail: "https://via.placeholder.com/150",
    link: "https://micheilfourie.github.io/Travel-Website/",
  },
];

const Projects = () => {
  return (
    <div className="w-full">
      <h4 className="py-4 text-center text-xl font-bold tracking-wider text-white uppercase max-lg:text-start">
        Projects
      </h4>
      <div className="grid w-full grid-cols-2 gap-4">
        {projectList.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            thumbnail={item.thumbnail}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
