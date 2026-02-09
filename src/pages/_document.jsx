import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        {/* <link rel="icon" type="image/x-icon" href="/images/logosolvnex.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="apple-icon.png" /> */}

        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png/" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Head>
      <body className="g-sidenav-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
