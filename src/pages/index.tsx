import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import Terminal from '../components/terminal';

const IndexPage: React.FC = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onClickAnywhere = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <Head>
                <title>{config.title}</title>
            </Head>

            <div onClick={onClickAnywhere} className="flex flex-col h-full">
                <Terminal inputRef={inputRef} />
            </div>
        </>
    );
};

export default IndexPage;
