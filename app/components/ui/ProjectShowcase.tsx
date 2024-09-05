import Image from "next/image";
import { projects } from "./projects";

const ProjectsShowcase = () => {
  return (
    <div>
        <h2 className="text-5xl text-black mb-8 text-center">Projects Showcase</h2>
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
          key={project.id}
          className={`flex flex-col ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
        >
          {/* Description */}
          <div className={`md:w-2/3 w-full ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More &rarr;
              </a>
            )}
          </div>
        
          {/* Screenshot */}
          <div className="md:w-1/3 w-full mt-6 md:mt-0">
            <Image
              src={project.image}
              alt={`${project.title} Screenshot`}
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
              placeholder="blur"
              blurDataURL="/images/placeholder.png" // Optional: Add a placeholder image
            />
          </div>
        </div>
        
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectsShowcase;
