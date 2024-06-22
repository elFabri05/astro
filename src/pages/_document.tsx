import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/favicon.png"/>
        <meta name="description" content="Fabrizio Maffoni" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
