import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { FaRegShareFromSquare } from 'react-icons/fa6';

function HeaderUserInfo({props}) {

    const userName = "younghk37";
    const profileImgURL = "\\images\\profile_img.png";
    const reviewCount = 0;
    const photoCount = 0;
    const followingCount = 0;
    const followerCount = 0;

    return (
        <div css={S.SLayout}>
            <div css={S.SProfileImgBackground}>
                <div css={S.SProfileImgContainer}>
                    <img css={S.SProfileImg} src={profileImgURL} alt="profile img" />
                </div>
            </div>
            <div>
                <div css={S.STitleContainer}>
                    <span css={S.SUserNameText}>
                        {userName}
                    </span>
                    <button css={S.SShareButton}>
                        <FaRegShareFromSquare />
                    </button>
                </div>
                <div css={S.SUserInfoContainer}>
                    <button>
                        <div>리뷰</div>
                        <div>{reviewCount}</div>
                    </button>
                    <button>
                        <div>사진</div>
                        <div>{photoCount}</div>
                    </button>
                    <button>
                        <div>팔로잉</div>
                        <div>{followingCount}</div>
                    </button>
                    <button>
                        <div>팔로워</div>
                        <div>{followerCount}</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderUserInfo;