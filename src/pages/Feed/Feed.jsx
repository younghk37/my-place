import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import Header from './Header/Header';
import CategoryList from './CategoryList/CategoryList';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { FiStar } from 'react-icons/fi';

function Feed(props) {

    const itemList = [
        {
            userName: "younghk37",
            profileImgURL: "\\images\\profile_img.png",
            photoReviewCount: 0,
            followerCount: 0,
            content: "모든곳이 포토스팟!!! 인생샷 100장건지는곳이에요ㅋㅋㅋ그리그 디저트도 완벽함ㅜ 생크림스콘 크림 낭낭하고요 까눌레도 겉은 빠작 속은촉촉 제대로고 마들렌은 촉촠하고 자두에이드엔 생자두가 숭덩숭덩 들어있어요 ㅜㅜ백점만점에 만점주고싶은곳!!! 재방문의사있습니다~~~!",
            locationTitle: "플레이판포 판포포구점",
            locationAddress: "수상,해양레저제주특별자치도 제주시 한경면",
        },
        {
            userName: "younghk37",
            profileImgURL: "\\images\\profile_img.png",
            photoReviewCount: 0,
            followerCount: 0,
            content: "모든곳이 포토스팟!!! 인생샷 100장건지는곳이에요ㅋㅋㅋ그리그 디저트도 완벽함ㅜ 생크림스콘 크림 낭낭하고요 까눌레도 겉은 빠작 속은촉촉 제대로고 마들렌은 촉촠하고 자두에이드엔 생자두가 숭덩숭덩 들어있어요 ㅜㅜ백점만점에 만점주고싶은곳!!! 재방문의사있습니다~~~!",
            locationTitle: "플레이판포 판포포구점",
            locationAddress: "수상,해양레저제주특별자치도 제주시 한경면",
        },
        {
            userName: "younghk37",
            profileImgURL: "\\images\\profile_img.png",
            photoReviewCount: 0,
            followerCount: 0,
            content: "모든곳이 포토스팟!!! 인생샷 100장건지는곳이에요ㅋㅋㅋ그리그 디저트도 완벽함ㅜ 생크림스콘 크림 낭낭하고요 까눌레도 겉은 빠작 속은촉촉 제대로고 마들렌은 촉촠하고 자두에이드엔 생자두가 숭덩숭덩 들어있어요 ㅜㅜ백점만점에 만점주고싶은곳!!! 재방문의사있습니다~~~!",
            locationTitle: "플레이판포 판포포구점",
            locationAddress: "수상,해양레저제주특별자치도 제주시 한경면",
        }
        ,
        {
            userName: "younghk37",
            profileImgURL: "\\images\\profile_img.png",
            photoReviewCount: 0,
            followerCount: 0,
            content: "모든곳이 포토스팟!!! 인생샷 100장건지는곳이에요ㅋㅋㅋ그리그 디저트도 완벽함ㅜ 생크림스콘 크림 낭낭하고요 까눌레도 겉은 빠작 속은촉촉 제대로고 마들렌은 촉촠하고 자두에이드엔 생자두가 숭덩숭덩 들어있어요 ㅜㅜ백점만점에 만점주고싶은곳!!! 재방문의사있습니다~~~!",
            locationTitle: "플레이판포 판포포구점",
            locationAddress: "수상,해양레저제주특별자치도 제주시 한경면",
        }
        ,
        {
            userName: "younghk37",
            profileImgURL: "\\images\\profile_img.png",
            photoReviewCount: 0,
            followerCount: 0,
            content: "모든곳이 포토스팟!!! 인생샷 100장건지는곳이에요ㅋㅋㅋ그리그 디저트도 완벽함ㅜ 생크림스콘 크림 낭낭하고요 까눌레도 겉은 빠작 속은촉촉 제대로고 마들렌은 촉촠하고 자두에이드엔 생자두가 숭덩숭덩 들어있어요 ㅜㅜ백점만점에 만점주고싶은곳!!! 재방문의사있습니다~~~!",
            locationTitle: "플레이판포 판포포구점",
            locationAddress: "수상,해양레저제주특별자치도 제주시 한경면",
        }
        ,
        {
            userName: "younghk37",
            profileImgURL: "\\images\\profile_img.png",
            photoReviewCount: 0,
            followerCount: 0,
            content: "모든곳이 포토스팟!!! 인생샷 100장건지는곳이에요ㅋㅋㅋ그리그 디저트도 완벽함ㅜ 생크림스콘 크림 낭낭하고요 까눌레도 겉은 빠작 속은촉촉 제대로고 마들렌은 촉촠하고 자두에이드엔 생자두가 숭덩숭덩 들어있어요 ㅜㅜ백점만점에 만점주고싶은곳!!! 재방문의사있습니다~~~!",
            locationTitle: "플레이판포 판포포구점",
            locationAddress: "수상,해양레저제주특별자치도 제주시 한경면",
        }
    ]

    const item = itemList[0];// temp

    return (
        <div css={S.SLayout}>
            <Header></Header>
            <CategoryList></CategoryList>
            <div css={S.SBackground}>
                {
                    itemList.map((item, index) => {
                        const isFirstItem = index === 0;
                        const hasMarginTop = (!isFirstItem && index !== 1);
                        return <>
                        <div css={S.SBackgroundWhite(hasMarginTop)}>
                            <div css={S.SContainer}>
                                <div css={S.SItem}>
                                    <div css={S.SItemHeader}>
                                        <div css={S.SUserInfo}>
                                            <div css={S.SProfileImgBackground}>
                                                <div css={S.SProfileImgContainer}>
                                                    <img css={S.SProfileImg} src={item.profileImgURL} alt="profile img" />
                                                </div>
                                            </div>
                                            <div>
                                                <div css={S.STitleContainer}>
                                                    <span css={S.SUserNameText}>
                                                        {item.userName}
                                                    </span>
                                                </div>
                                                <div css={S.SUserInfoContainer}>
                                                    <button>
                                                        <div>사진리뷰 {item.photoReviewCount}</div>
                                                    </button>
                                                    <button>
                                                        <div>팔로워 {item.followerCount}</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div css={S.SActionContainer}>
                                            <button>팔로우</button>
                                            <button>:</button>
                                        </div>
                                    </div>
                                    <div css={S.SItemImg}>
                                        <img src="images/cafe1.jpg" alt="" />
                                    </div>
                                    <div css={S.SItemContent}>
                                        {item.content}
                                    </div>
                                    <div css={S.SItemTags}>
                                        <button><HiOutlineFaceSmile />음식이 맛있어요</button>
                                        <button><HiOutlineFaceSmile />냉난방이 잘돼요</button>
                                    </div>
                                    <div css={S.SItemFooter}>
                                        <button><HiOutlineFaceSmile />반응 남기기</button>
                                        <div>8.28 월 방문</div>
                                    </div>
                                    <div css={S.SItemLocationInfo}>
                                        <div css={S.SLocationTitle}>
                                            <div>
                                                {item.locationTitle}
                                                <span>{'>'}</span>
                                            </div>
                                            <div>
                                                {item.locationAddress}
                                            </div>
                                        </div>
                                        <div css={S.SSaveButtonContainer}>
                                            <FiStar />
                                            <buttton>저장</buttton>
                                        </div>
                                        <div css={S.SLocationInfoAdditional}>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div css={S.SAd(isFirstItem)}>
                                <div>
                                    광고
                                </div>
                            </div>
                        </div>
                    </>})
                }
            </div>
        </div>
    );
}

export default Feed;