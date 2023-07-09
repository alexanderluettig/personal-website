import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import Navigation from '../components/navigation/navbar';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport"
                    maximum-scale="1"
                />
            </Head>
            <div className="text-dark-foreground min-w-max text-xs md:min-w-full md:text-base">
                <main className="flex flex-col bg-dark-background w-full h-full p-2">
                    <Navigation />
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
};

export default App;
