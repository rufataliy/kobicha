import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={"#b3e3cc"} />
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/png"
            href="https://kobicha.rufat.tech/meta/favicon.ico"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta name="name" content="Kobicha | Coffee shop" />
          <meta
            name="description"
            content="Community minded coffee shop serving high quality coffee drink."
          />
          <meta
            name="image"
            content="https://kobicha.rufat.tech/img/logo-full.png"
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://kobicha.rufat.tech" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Kobicha | Coffee shop" />
          <meta
            property="og:description"
            content="Community minded coffee shop serving high quality coffee drink."
          />
          <meta
            property="og:image"
            content="https://kobicha.rufat.tech/img/logo-full.png"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Kobicha | Coffee shop" />
          <meta
            name="twitter:description"
            content="Community minded coffee shop serving high quality coffee drink."
          />
          <meta
            name="twitter:image"
            content="https://kobicha.rufat.tech/img/logo-full.png"
          />
          {/* <!-- <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> --> */}
          {/* <!--
            manifest.json provides metadata used when your web app is installed on a
            user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          --> */}
          <link
            rel="manifest"
            href="https://kobicha.rufat.tech/meta/manifest.json"
          />
          {/* <!--
            Notice the use of %PUBLIC_URL% in the tags above.
            It will be replaced with the URL of the `public` folder during the build.
            Only files inside the `public` folder can be referenced from the HTML.

            Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
            work correctly both with client-side routing and a non-root public URL.
            Learn how to configure a non-root public URL by running `npm run build`.
          --> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
