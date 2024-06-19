import '../styles/globals.css'; // Ensure this path is correct
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;