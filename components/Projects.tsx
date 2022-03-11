import { Project } from "../types/Project";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
      {projects.map((project: Project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
};

export default Projects;
