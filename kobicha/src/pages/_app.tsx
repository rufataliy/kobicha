import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../theme";
import { Footer, Header } from "../components";

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

App.getInitialProps = async function (context) {
  const data: Data = await fetch("http://localhost:3000/api")
    .then((res) => res.json())
    .then((data) => data);

  return {
    appProps: { data },
  };
};
