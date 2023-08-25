import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useRecoilState } from 'recoil';
import { pathState } from '../../../store/currentPathStore';

function HeaderNav(props) {

    const [ path, setPath ] = useRecoilState(pathState);

    return (
        <nav css={S.SLayout}>
            <div css={S.SContainer}>
                <button css={S.SButton(path === "/feed")} onClick={() => setPath("/feed")}>피드</button>
                <button css={S.SButton(path === "/timeLine")} onClick={() => setPath("/timeLine")}>타임라인</button>
                <button css={S.SButton(path === "/review")} onClick={() => setPath("/review")}>리뷰</button>
                <button css={S.SButton(path === "/reservationOrOrder")} onClick={() => setPath("/reservationOrOrder")}>예약·주문</button>
                <button css={S.SButton(path === "/save")} onClick={() => setPath("/save")}>저장</button>
            </div>
        </nav>
    );
}

export default HeaderNav;