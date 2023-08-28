import { Reset } from 'styled-reset';
import './App.css';
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { GSCommon } from "./styles/common";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const SLayout = css`

`;

function App() {
  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
      <div css={SLayout}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;