import Link from 'next/link';
import config from '../../config.json';

const WebsiteView: React.FC = () => {
    return (
        <div className="p-8 overflow-hidden overflow-y-scroll h-full border-2 rounded border-dark-yellow">
            <div className=" h-full flex flex-row justify-center items-center">
                <div className="min-w-[40%] flex flex-col items-center justify-center">
                    <div>Image</div>
                </div>
                <div className="h-full flex flex-col items-center space-y-3">
                    <div>
                        <p>
                            Velit fugiat aliquip tempor Lorem in fugiat. Eiusmod
                            veniam nostrud officia qui pariatur sint eu deserunt
                            non non pariatur consequat. Quis reprehenderit non
                            pariatur esse tempor ipsum aliqua ex reprehenderit
                            et proident laborum. Dolore in quis tempor ea est
                            mollit amet sunt Lorem fugiat aute elit Lorem. Eu
                            qui reprehenderit magna irure ad irure labore
                            deserunt aute nostrud nisi ut pariatur. Cillum
                            proident exercitation anim commodo aute minim nulla
                            dolore enim nostrud pariatur occaecat do
                            reprehenderit. Quis reprehenderit culpa ex cupidatat
                            et exercitation.In elit enim ullamco do veniam duis
                            id dolor Lorem velit proident. Id nostrud excepteur
                            exercitation dolor tempor minim exercitation esse
                            incididunt exercitation enim minim. Amet officia
                            dolore veniam exercitation fugiat ipsum do do. Velit
                            Lorem laborum duis ut anim sunt laborum elit aliqua
                            culpa nostrud sit. Nulla dolore labore fugiat
                            proident id aute commodo excepteur aliquip Lorem
                            incididunt deserunt irure. Dolore pariatur ut ea
                            nostrud laborum non magna ipsum est ea. Duis do
                            exercitation dolore do.
                        </p>
                    </div>
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
                        <p>
                            More about me on the
                            <Link href="/about">
                                <span className="hover:text-dark-yellow">
                                    {' '}
                                    <span className="border-b-[1px]">
                                        About
                                    </span>{' '}
                                </span>
                            </Link>
                            Page
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

function unixTimeToYears(unixTime: number): number {
    return Math.floor(unixTime / 31556952000);
}

export default WebsiteView;
