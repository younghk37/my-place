import { Reset } from 'styled-reset';
import './App.css';
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { GSCommon } from "./styles/common";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from './store/modalStatusStore';
import { isReportMenuOpenState } from './store/reportMenuStore';

const SLayout = css`
  
`;

function App() {
  
  const [ isModalOpen ] = useRecoilState(isModalOpenState);
  const [ isReportMenuOpen, setIsReportMenuOpen ] = useRecoilState(isReportMenuOpenState);

  return (
    <>
      <Reset />
      <Global styles={GSCommon(isModalOpen)} />
      <div css={SLayout} onClick={() => {setIsReportMenuOpen(false);}}>
        <Header />
        <Main />
        <Footer />
        <Modal />
      </div>
    </>
  );
}

export default App;