import Head from 'next/head';
import React from 'react';
import Terminal from '../components/terminal';
import { useRouter } from 'next/router';
import WebsiteView from '../components/websiteView';

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
            </Head>

            <div className="overflow-hidden flex flex-col h-full">
                {view === 'terminal' ? (
                    <div
                        onClick={onClickAnywhere}
                        className="overflow-hidden h-full"
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
