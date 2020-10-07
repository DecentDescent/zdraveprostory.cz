import Head from "next/head";

const HeadComponent = (props) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Zdravé prostory</title>
    <meta name="description" content="Zdravé prostory" />
    <meta property="og:title" content="Zdravé prostory" />
    <meta property="og:description" content="Zdravé prostory" />
    <meta property="og:image" content="/static/graphics/og.jpg" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta property="og:type" content="website" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicon/safari-pinned-tab.svg"
      color="#56a6bd"
    />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-config"
      content="/static/favicon/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);

export default HeadComponent;
