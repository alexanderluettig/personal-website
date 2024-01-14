import Head from 'next/head';
import config from '../../../config.json';
import Timeline from '../../components/timeline/timeline';

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <div className="h-full w-full overflow-hidden overflow-y-auto flex border-2 rounded border-dark-yellow p-8 space-x-5">
                <Timeline />
                <div className="space-y-4">
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
            </div>
        </>
    );
};

function unixTimeToYears(unixTime: number): number {
    return Math.floor(unixTime / 31556952000);
}

export default About;
