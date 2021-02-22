import 'tailwindcss/tailwind.css';
import '../styles/globals.css'; // maybe delete this...
import { GlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
