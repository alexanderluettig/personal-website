import Head from 'next/head';
import React from 'react';
import Terminal from '../components/home/terminal';
import { useRouter } from 'next/router';
import WebsiteView from '../components/home/websiteView';

const IndexPage: React.FC = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const router = useRouter();

    const view = router.query.view;

    const onClickAnywhere = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Hey there! Welcome to my little corner of the internet. Here, I share my journey through tech and software development, my projects, and all things coding that catch my eye. Dive in and see what I'm all about!"
                />
            </Head>

            <div className="overflow-hidden h-full">
                {view === 'terminal' ? (
                    <div
                        onClick={onClickAnywhere}
                        className="overflow-hidden flex flex-col h-full"
                    >
                        <Terminal inputRef={inputRef} />
                    </div>
                ) : (
                    <div className="overflow-hidden h-full">
                        <WebsiteView />
                    </div>
                )}
            </div>
        </>
    );
};

export default IndexPage;
