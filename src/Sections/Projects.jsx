import { ProjectCard } from "../index.js";
import TravelThumbnail from "../assets/Travel Website Thumbnail.webp";
import FurnatureThumbnail from "../assets/Furnature E-Commerce Thumbnail.webp";
import { forwardRef } from "react";

const projectList = [
  {
    title: "E-Commerce Website",
    thumbnail: FurnatureThumbnail,
    link: "https://micheilfourie.github.io/Furniture-Shop-Website/",
    gitLink: "https://github.com/micheilfourie/Furniture-Shop-Website",
  },
  {
    title: "Travel Website",
    thumbnail: TravelThumbnail,
    link: "https://micheilfourie.github.io/Travel-Website/",
    gitLink: "https://github.com/micheilfourie/Travel-Website",
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-4">
        <h4 className="text-xl font-bold tracking-wider text-white uppercase">
          Websites
        </h4>
        <div className="grid w-full grid-cols-2 gap-4 max-md:grid-cols-1">
          {projectList.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              link={item.link}
              gitLink={item.gitLink}
            />
          ))}
        </div>
      </div>
      <p className="text-sm tracking-wide text-gray-400 italic">
        - More Websites Coming Soon ...
      </p>
    </section>
  );
});

export default Projects;
