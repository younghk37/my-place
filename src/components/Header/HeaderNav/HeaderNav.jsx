import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { Link, useLocation } from 'react-router-dom';

function HeaderNav(props) {
    const pathName = useLocation().pathname;

    return (
        <nav css={S.SLayout}>
            <div css={S.SContainer}>
                <Link css={S.SButton(pathName === "/feed")} to={"/feed"}>피드</Link>
                <Link css={S.SButton(pathName === "/timeLine")} to={"/timeLine"}>타임라인</Link>
                <Link css={S.SButton(pathName === "/review")} to={"/review"}>리뷰</Link>
                <Link css={S.SButton(pathName === "/reservationOrOrder")} to={"/reservationOrOrder"}>예약·주문</Link>
                <Link css={S.SButton(pathName === "/save")} to={"/save"}>저장</Link>
            </div>
        </nav>
    );
}

export default HeaderNav;