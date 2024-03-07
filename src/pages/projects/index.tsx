import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getProjects } from '../../utils/api';
import ProjectView from '../../components/projectView';
import SearchBar from '../../components/searchbar';

export interface Project {
    name: string;
    url: string;
    description: string;
    stars: number;
}

const Projects: React.FC = () => {
    var [projects, setProjects] = useState([]);
    var [searchQuery, setSearchQuery] = useState('');

    const satisfiesSearchQuery = (project: Project): boolean => {
        if (searchQuery === '') return true;

        if (!searchQuery.includes(':')) {
            return (
                project.name?.includes(searchQuery) ||
                project.description?.includes(searchQuery)
            );
        }

        const query = searchQuery.split(':');
        const type = query[0];
        const value = query[1];

        if (type === 'title') {
            return project.name.includes(value);
        } else if (type === 'description') {
            return project.description.includes(value);
        } else {
            return false;
        }
    };

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
                <meta
                    name="description"
                    content="Dive into my world of coding projects where innovation and functionality meet. My work, ranging from open-source contributions to personal endeavors, showcases my commitment to excellence in software development and my passion for pushing technological boundaries. | Alexander Lüttig"
                />
            </Head>

            <div className="overflow-hidden overflow-y-auto h-full w-full border-2 rounded border-dark-yellow pl-10 pr-10">
                <div className="m-3 flex items-center justify-center">
                    <SearchBar
                        callback={setSearchQuery}
                        placeholderText="Enter a search query (eg. title:website or description:website)"
                    />
                </div>
                <div className="m-3 flex flex-row flex-wrap gap-x-14 gap-y-5">
                    {projects
                        .filter(satisfiesSearchQuery)
                        .sort((a: Project, b: Project) => b.stars - a.stars)
                        .map((project: Project, i: number) => {
                            return <ProjectView key={i} project={project} />;
                        })}
                </div>
            </div>
        </>
    );
};

export default Projects;
