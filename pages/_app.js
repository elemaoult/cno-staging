import '../styles/globals.scss';
import NextNprogress from 'nextjs-progressbar';
import $ from 'jquery';


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
