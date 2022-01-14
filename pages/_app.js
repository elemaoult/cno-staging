import { useEffect } from 'react';

import '../styles/globals.scss';
import AOS from "aos";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  });

  return <Component {...pageProps} />
}

export default MyApp
