import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getProjects } from '../../utils/api';
import ProjectView from '../../components/projectView';

export interface Project {
    name: string;
    url: string;
    description: string;
    stars: number;
}

const Projects: React.FC = () => {
    var [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            return await getProjects();
        };

        fetchData().then((data: any[]) => {
            data = data
                .map((project): Project => {
                    return {
                        name: project.name,
                        description: project.description,
                        stars: project.stargazers_count,
                        url: project.html_url,
                    };
                })
                .sort((a: Project, b: Project) => b.stars - a.stars);

            setProjects(data);
        });
    }, []);

    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>

            <div className="h-full w-full border-2 rounded border-dark-yellow">
                <div className="flex flex-row flex-wrap justify-around">
                    {projects.map((project: Project, i: number) => {
                        return <ProjectView key={i} project={project} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;
