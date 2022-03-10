import { Project } from "../types/Project";

const ProjectCard = ({ name, dates, description, link }: Project) => {
  return (
    <div className="border border-black dark:border-neutral-300 rounded-md p-4 flex flex-col space-y-2">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        {dates && <p className="text-sm py-1 text-neutral-600 dark:text-neutral-400">{dates}</p>}
      </div>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" className="font-semibold">
          See demo &rarr;
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
