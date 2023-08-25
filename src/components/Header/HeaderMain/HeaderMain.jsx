import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import HeaderUserInfo from './HeaderUserInfo/HeaderUserInfo';
import HeaderActions from './HeaderActions/HeaderActions';

function HeaderMain(props) {
    return (
        <div css={S.SLayout}>
            <HeaderUserInfo />
            <HeaderActions />
        </div>
    );
}

export default HeaderMain;