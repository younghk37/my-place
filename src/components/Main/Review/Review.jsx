import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function Review(props) {
    const titleText = <><span>정성스레 작성한 </span><strong>리뷰</strong><br/><span>내 리뷰를 모아 만든 </span><strong>테마리스트</strong></>;

    const subText = "나의 발자취를 소중한 기록으로 남겨보세요.";
    const imgUrl = "images/noreview.png";
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

export default Review;