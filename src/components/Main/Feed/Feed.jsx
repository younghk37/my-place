import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import Header from './Header/Header';
import CategoryList from './CategoryList/CategoryList';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { FiStar } from 'react-icons/fi';

function Feed(props) {

    const userName = "younghk37";
    const profileImgURL = "\\images\\profile_img.png";
    const photoReviewCount = 0;
    const followerCount = 0;
    const content = "모든곳이 포토스팟!!! 인생샷 100장건지는곳이에요ㅋㅋㅋ그리그 디저트도 완벽함ㅜ 생크림스콘 크림 낭낭하고요 까눌레도 겉은 빠작 속은촉촉 제대로고 마들렌은 촉촠하고 자두에이드엔 생자두가 숭덩숭덩 들어있어요 ㅜㅜ백점만점에 만점주고싶은곳!!! 재방문의사있습니다~~~!";
    const locationTitle = "플레이판포 판포포구점";
    const locationAddress = "수상,해양레저제주특별자치도 제주시 한경면";


    return (
        <div css={S.SLayout}>
            <Header></Header>
            <CategoryList></CategoryList>
            <div css={S.SContainer}>
                <div css={S.SItem}>
                    <div css={S.SItemHeader}>
                        <div css={S.SUserInfo}>
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
                                </div>
                                <div css={S.SUserInfoContainer}>
                                    <button>
                                        <div>사진리뷰 </div>
                                        <div>{photoReviewCount}</div>
                                    </button>
                                    <div>
                                        ·
                                    </div>
                                    <button>
                                        <div>팔로워 </div>
                                        <div>{followerCount}</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button>팔로우</button>
                            <span>:</span>
                        </div>
                    </div>
                    <div css={S.SItemImg}>
                        <img src="images/cafe1.jpg" alt="" />
                    </div>
                    <div css={S.SItemContent}>
                        {content}
                    </div>
                    <div css={S.SItemTags}>
                        <button><HiOutlineFaceSmile />음식이 맛있어요</button>
                    </div>
                    <div css={S.SItemFooter}>
                        <button><HiOutlineFaceSmile />반응 남기기</button>
                        <div>8.28 월 방문</div>
                    </div>
                    <div css={S.SItemLocationInfo}>
                        <div css={S.SLocationInfoMain}>
                            <div css={S.SLocationTitle}>
                                <div>
                                    {locationTitle}
                                    <span>{'>'}</span>
                                </div>
                                <div>
                                    {locationAddress}
                                </div>
                                <div>
                                    <FiStar />
                                    <span>저장</span>
                                </div>
                            </div>
                        </div>
                        <div css={S.SLocationInfoAdditional}>
                            혜택
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;