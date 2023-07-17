import Link from 'next/link';
import { Project } from '../pages/projects';

interface ProjectViewProps {
    project: Project;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project }) => {
    return (
        <div className="w-full md:w-[45%] border-2 rounded border-light-yellow p-4 cursor-pointer grow">
            <Link href={project.url}>
                <span>
                    <div className="flex flex-row justify-between items-center mb-3">
                        <h1 className="text-sm sm:text-lg">{project.name}</h1>
                        <h2 className="text-sm sm:text-base">
                            {project.stars} stars
                        </h2>
                    </div>
                    <p className="">{project.description}</p>
                </span>
            </Link>
        </div>
    );
};

export default ProjectView;
