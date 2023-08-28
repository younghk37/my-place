import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function TimeLine(props) {
    const titleText = <><strong>영수증/카드내역 인증, 예약, 주문</strong><span>한 장소가 나의 기록이 됩니다.</span></>;

    const subText = "방문했던 곳을 한 눈에 모아보세요.";
    const imgUrl = "images/notimeline.png";
    const buttonText = "리뷰 참여하기";

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                    <div css={S.SFlagImg}><svg viewBox="0 0 19 20" class="EjpFk4" aria-hidden="true"><ellipse fill="#30A2B4" cx="7" cy="18" rx="7" ry="2"></ellipse><path fill="#E6E6E0" d="M5 0H7V18H5z"></path><path fill="#DB6E6E" d="M19 5.722L7 9 7 2z"></path></svg></div>
                <div css={S.STitleTextContainer}>
                    {titleText}
                </div>
                <div css={S.SSubText}>{subText}</div>
                <img css={S.SImg} src={imgUrl} alt="" />
                <button css={S.SButton}>{buttonText}</button>
            </div>
        </div>
    );
}

export default TimeLine;