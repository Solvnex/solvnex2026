import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Head from 'next/head';

const theme = createTheme({
  typography: {
    fontFamily: 'greycliff-cf, sans-serif',
    fontWeight: 400,
    button: {
      fontSize: '18px',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Solvnex : Erota</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      {/* <title>Solvnex</title> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
