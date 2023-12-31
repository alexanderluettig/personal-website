import Link from 'next/link';
import Image from 'next/image';

const WebsiteView: React.FC = () => {
    return (
        <div className="p-8 overflow-hidden overflow-y-scroll h-full border-2 rounded border-dark-yellow">
            <div className=" h-full flex flex-row justify-center items-center">
                <div className="min-w-[40%] flex flex-col items-center justify-center">
                    <Image
                        src="/assets/images/profilbild-compressed.png"
                        width={650}
                        height={700}
                        alt="image of me"
                    />
                </div>
                <div className="h-full flex flex-col items-center space-y-3">
                    <div className="h-full flex items-center">
                        <p>
                            <p>
                                Hey Ho, I&apos;m Alex, a passionate software
                                developer with a deep affinity for everything
                                related to backend development. My journey into
                                the world of computer science began early in my
                                school days, where I discovered a fascination
                                for creative problem-solving - a contrast to
                                mathematics, which is also a great passion of
                                mine.
                            </p>
                            <br />
                            <p>
                                After graduating from high school, I initially
                                started studying mathematics but soon realized
                                that my true calling was in computer science.
                                During my studies, I gained experience in
                                various areas of software development, such as
                                testing and project management. However, my
                                heart beat stronger for software development
                                itself, which I have now been doing
                                professionally since the end of 2021.
                            </p>
                            <br />
                            <p>
                                My main interest is in backend development.
                                Here, I am fascinated by everything around data,
                                databases, and web APIs. My drive is the
                                continuous learning and deepening of my skills,
                                particularly in C# and the ASP.NET Core
                                environment.
                            </p>
                            <br />
                            <p>
                                On my website, in the
                                <Link href="/projects">
                                    <span className="hover:text-dark-yellow">
                                        {' '}
                                        <span className="border-b-[1px]">
                                            Projects
                                        </span>{' '}
                                    </span>
                                </Link>
                                section, you can find various projects I have
                                realized. These range from learning projects to
                                real, practical applications. My goal is to
                                become an expert in the field of backend
                                development – a long but exciting journey on
                                which I am constantly educating myself.
                            </p>
                            <br />
                            <p>
                                Besides my professional passion, I am also
                                immersed in the world of technology and
                                creativity in my private life. I program a lot
                                in my free time, play video games, watch anime,
                                and am trying my hand at music production. I am
                                also an avid reader, especially of non-fiction
                                books.
                            </p>
                            <br />
                            <p>
                                Through my website, I aim to share my journey in
                                the world of software development, impart my
                                knowledge, and connect with like-minded
                                individuals. I look forward to sharing my
                                passion and experiences with you!
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteView;
