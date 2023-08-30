import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import Header from './Header/Header';
import CategoryList from './CategoryList/CategoryList';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { FiStar } from 'react-icons/fi';
import { PiSirenLight, PiSmileyLight } from 'react-icons/pi';
import { FaBan } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { isReportMenuOpenState } from '../../store/reportMenuStore';

function Feed(props) {

    const itemList = [
        {
            userName: "younghk37",
            profileImgURL: "\\images\\profile\\profile_img.png",
            photoReviewCount: 0,
            followerCount: 0,
            img: "images/post/cafe1.jpg",
            content: 
`너무너무 이쁘고 즐거웠어요 ㅎㅎ
직원분들도 너무 친절하고 재밌고 ㅠㅠ
너무 편하게 대해주셔서 기분좋게 힐링했어요❤️
사진도 찍으라며 먼저 말씀해주시고 너무 이쁘게 찍어주시구 진짜 왜 요트홀릭 요트홀릭 하는줄 알겠어요 ㅎㅎ
다음에 또 요트타게 되더라도 또 요트홀릭 찾을것같아요 잘놀다갑니다~❤️`,
            locationTitle: "플레이판포 판포포구점",
            locationAddress: "수상 해양레저제주특별자치도 제주시 한경면",
        },
        {
            userName: "kdy****",
            profileImgURL: "\\images\\profile\\profile_img.png",
            photoReviewCount: 3,
            followerCount: 0,
            img: "images/post/building1.jpeg",
            content: 
`너무너무 이쁘고 즐거웠어요 ㅎㅎ
직원분들도 너무 친절하고 재밌고 ㅠㅠ
너무 편하게 대해주셔서 기분좋게 힐링했어요❤️
사진도 찍으라며 먼저 말씀해주시고 너무 이쁘게 찍어주시구 진짜 왜 요트홀릭 요트홀릭 하는줄 알겠어요 ㅎㅎ
다음에 또 요트타게 되더라도 또 요트홀릭 찾을것같아요 잘놀다갑니다~❤️`,
            locationTitle: "요트홀릭",
            locationAddress: "요트 부산광역시 해운대구 우동",
        },
        {
            userName: "돼랑이9226",
            profileImgURL: "\\images\\profile\\profile_img.png",
            photoReviewCount: 17,
            followerCount: 0,
            img: "images/post/food1.jpg",
            content: 
`아침인데도 한치라면 , 문어라면 주문할 수 있고요. 양도 맛있고 맛도 끝내줍니다. 👍애월 해장시에 꼭 가세요 강추해요`,
            locationTitle: "해물통라면 문개항아리 애월해안도로점",
            locationAddress: "라면 제주특별자치도 제주시 애월읍",
        }
        ,
        {
            userName: "지중해뜨거운바람",
            profileImgURL: "\\images\\profile\\profile_img.png",
            photoReviewCount: 2,
            followerCount: 0,
            img: "images/post/stone1.jpg",
            content: 
`최고라는 말이 딱 맞는곳 입니다 벗꽃 필때 다시 가보고 싶군요~`,
            locationTitle: "사량도",
            locationAddress: "섬 경상남도 통영시 사량면",
        }
        ,
        {
            userName: "younghk37",
            profileImgURL: "\\images\\profile\\profile_img.png",
            photoReviewCount: 0,
            followerCount: 0,
            img: "images/post/cafe1.jpg",
            content: 
`너무너무 이쁘고 즐거웠어요 ㅎㅎ
직원분들도 너무 친절하고 재밌고 ㅠㅠ
너무 편하게 대해주셔서 기분좋게 힐링했어요❤️
사진도 찍으라며 먼저 말씀해주시고 너무 이쁘게 찍어주시구 진짜 왜 요트홀릭 요트홀릭 하는줄 알겠어요 ㅎㅎ
다음에 또 요트타게 되더라도 또 요트홀릭 찾을것같아요 잘놀다갑니다~❤️`,
            locationTitle: "플레이판포 판포포구점",
            locationAddress: "수상 해양레저제주특별자치도 제주시 한경면",
        }
        ,
        {
            userName: "younghk37",
            profileImgURL: "\\images\\profile\\profile_img.png",
            photoReviewCount: 0,
            followerCount: 0,
            img: "images/post/cafe1.jpg",
            content: 
`너무너무 이쁘고 즐거웠어요 ㅎㅎ
직원분들도 너무 친절하고 재밌고 ㅠㅠ
너무 편하게 대해주셔서 기분좋게 힐링했어요❤️
사진도 찍으라며 먼저 말씀해주시고 너무 이쁘게 찍어주시구 진짜 왜 요트홀릭 요트홀릭 하는줄 알겠어요 ㅎㅎ
다음에 또 요트타게 되더라도 또 요트홀릭 찾을것같아요 잘놀다갑니다~❤️`,
            locationTitle: "플레이판포 판포포구점",
            locationAddress: "수상 해양레저제주특별자치도 제주시 한경면",
        }
    ]

    const [ isReportMenuOpen, setIsReportMenuOpen ] = useRecoilState(isReportMenuOpenState);

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
                                            <button onClick={(e) => {e.stopPropagation();setIsReportMenuOpen(true);}}>:</button>
                                            <div css={S.SReport(isReportMenuOpen)}>
                                                <div>
                                                    리뷰/리뷰어 신고<PiSirenLight />
                                                </div>
                                                <div>
                                                    리뷰어 차단<FaBan />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div css={S.SItemImg}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <pre css={S.SItemContent}>
                                        {item.content}
                                    </pre>
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
                                            <button>저장</button>
                                        </div>
                                        <div css={S.SLocationInfoAdditional}>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div css={S.SAdContainer(isFirstItem)}>
                                <a href='.' css={S.SAdContentContainer}>
                                    <div css={S.AdLeft}>
                                        <div css={S.AdIcon}>
                                            <PiSmileyLight />
                                        </div>
                                        <div css={S.AdText}>
                                            <div>지금 로그인하고</div>
                                            <div><em>내게 맞는 피드</em>로 바꿔볼까요?</div>
                                        </div>
                                    </div>
                                    <div css={S.AdRight}>
                                        {'>'}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </>})
                }
            </div>
        </div>
    );
}

export default Feed;