import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../theme";
import { Footer, Header } from "../components";
import { AppContext } from "next/app";
const App = ({ Component, pageProps, appProps }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header data={appProps.data.header} />
        <Component {...appProps} {...pageProps} />
        <Footer data={appProps.data.footer} />
      </ThemeProvider>
    </>
  );
};

export default App;

App.getInitialProps = async function (app: AppContext) {
  const url = "http://" + app.ctx.req.headers.host + "/api";
  const data: Data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  return {
    appProps: { data },
  };
};
