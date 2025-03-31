import { ProjectCard } from "../index.js";
import TravelThumbnail from "../assets/Travel Website Thumbnail.png";
import FurnatureThumbnail from "../assets/Furnature E-Commerce Thumbnail.png";

const projectList = [
  {
    title: "Furnature E-Commerce",
    thumbnail: FurnatureThumbnail,
    link: "https://micheilfourie.github.io/Furniture-Shop-Website/",
  },
  {
    title: "Travel Website",
    thumbnail: TravelThumbnail,
    link: "https://micheilfourie.github.io/Travel-Website/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="flex w-full flex-col gap-4">
      <h4 className="py-4 text-xl font-bold tracking-wider text-white uppercase">
        Projects
      </h4>
      <div className="grid w-full grid-cols-2 gap-4 max-sm:grid-cols-1">
        {projectList.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            thumbnail={item.thumbnail}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
