import '../styles/globals.css'; // Ensure this path is correct
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;