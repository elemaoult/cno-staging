import '../styles/globals.scss';
import NextNprogress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextNprogress
        color="#517BBD"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
