import Link from 'next/link';
import { Project } from '../pages/projects';

interface ProjectViewProps {
    project: Project;
}

const ProjectView: React.FC<ProjectViewProps> = ({ project }) => {
    return (
        <div className="border-2 rounded w-[45%] m-2 border-light-yellow p-4 cursor-pointer">
            <Link href={project.url}>
                <span>
                    <div className="flex flex-row justify-between items-center mb-2">
                        <h1 className="text-xl">{project.name}</h1>
                        <h2 className="text-l">{project.stars} stars</h2>
                    </div>
                    <p className="">{project.description}</p>
                </span>
            </Link>
        </div>
    );
};

export default ProjectView;
