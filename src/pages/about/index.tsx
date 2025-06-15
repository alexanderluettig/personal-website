import Head from 'next/head';
import config from '../../../config.json';
import Timeline from '../../components/timeline/timeline';

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta
                    name="description"
                    content="I am Alexander Lüttig, a passionate software developer and technology enthusiast. My dedication to backend development and problem-solving has shaped my career and interests. Discover my story, skills, and the motivations that fuel my quest for deep knowledge in software development. | Alexander Lüttig"
                />
            </Head>

            <div className="h-full w-full overflow-hidden sm:flex overflow-y-auto border-2 rounded-sm border-dark-yellow p-8 space-x-5 space-y-5">
                <div className="space-y-4 sm:w-[60%]">
                    <p>Name: {config.name}</p>
                    <p>
                        Age:{' '}
                        {unixTimeToYears(
                            Date.now() - Date.parse(config.birthdate),
                        )}
                    </p>
                    <p>Location: {config.location}</p>
                    <p>Languages: {config.languages.join(', ')}</p>
                    <p>Occupation: {config.occupation}</p>
                </div>
                <Timeline />
            </div>
        </>
    );
};

function unixTimeToYears(unixTime: number): number {
    return Math.floor(unixTime / 31556952000);
}

export default About;
