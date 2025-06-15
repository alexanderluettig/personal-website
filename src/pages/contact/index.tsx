import Head from 'next/head';

const Contact: React.FC = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta
                    name="description"
                    content="Got something on your mind? Let's chat! Whether you're looking to talk tech, collaborate on a project, or just drop a hello, you've come to the right place. I'm all ears for ideas, questions, and everything in between. | Alexander Lüttig"
                />
            </Head>

            <div className="h-full border-2 rounded-sm border-dark-yellow">
                Contact
            </div>
        </>
    );
};

export default Contact;
