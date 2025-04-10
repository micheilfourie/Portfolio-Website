import { ProjectCard } from "../index.js";
import { forwardRef } from "react";
import { projectList } from "../data.js";

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
