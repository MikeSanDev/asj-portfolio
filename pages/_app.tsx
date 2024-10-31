import '../styles/globals.css'; // Ensure this path is correct
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Aaron San Jose</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;