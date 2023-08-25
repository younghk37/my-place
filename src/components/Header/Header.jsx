import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderNav from './HeaderNav/HeaderNav';

function Header(props) {
    return (
        <div css={S.SLayout}>
            <HeaderTop/>
            <HeaderMain/>
            <HeaderNav/>
        </div>
    );
}

export default Header;