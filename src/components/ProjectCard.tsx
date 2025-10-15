import Tags from "./Tags";

interface ProjectCardProps {
  project: ProjectCardDetails;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="card p-6 relative overflow-hidden h-106">
      <h1 className="card-h1 md:text-2xl font-semibold">{project.heading}</h1>

      <div className="my-2 md:my-4 w-4/6 text-wrap">
        <p className="my-4">{project.desc}</p>
      </div>

      <Tags items={project.tags} />

      <img
        src={project.image}
        alt={project.heading}
        className="absolute bottom-0 right-0 block object-cover rounded-lg w-80"
      />
    </div>
  );
};

export default ProjectCard;
