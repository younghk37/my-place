import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function Footer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SFooterTop}>
                <a href=".">로그인</a>
                <a href=".">전체서비스</a>
            </div>
            <div css={S.SFooterMiddle}>
                <a href=".">이용정책</a>
                <a href=".">MY플레이스 고객센터</a>
                <a href=".">신고센터</a>
                <a href=".">공지사항</a>
            </div>
            <div css={S.SFooterBottom}>
                <a href=".">© NAVER Corp.</a>
            </div>
        </div>
    );
}

export default Footer;