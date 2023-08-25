import { Reset } from 'styled-reset';
import './App.css';
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { GSCommon } from "./styles/common";
import Header from './components/Header/Header';

const SLayout = css`

`;

function App() {
  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
      <div css={SLayout}>
        <Header />
      </div>
    </>
  );
}

export default App;