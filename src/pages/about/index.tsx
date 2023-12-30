import Head from 'next/head';
import Link from 'next/link';
import config from '../../../config.json';

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>

            <div className="h-full border-2 rounded border-dark-yellow p-10">
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
