import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
