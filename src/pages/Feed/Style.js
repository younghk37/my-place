/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    width: 100%;
`;

export const SBackground = css`
    background-color: #F8F9FA;
`;

export const SBackgroundWhite = (hasMarginTop) => css`
    ${hasMarginTop ? "margin-top: 10px;" : ""}
    background-color: #FFFFFF;
`;

export const SContainer = css`
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 16px 20px 28px 20px;
    width: 720px
`;

export const SItem = css`
    display: block;
    width: 100%;
`;

export const SItemHeader = css`
    display: flex;
    height: 65px;
`;

export const SUserInfo = css`
    display: flex;
    margin: -10px;
    padding: 10px;
    height: 62px;
    flex-grow: 1;
`;

export const SProfileImgBackground = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    background-color: white;
`;

export const SProfileImgContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.05);
    width: 38px;
    height: 38px;
    overflow: hidden;
`;

export const SProfileImg = css`
    width: 100%;
    height: 100%;
`;

export const STitleContainer = css`
    width: 248px;
    height: 26px;
`;

export const SUserNameText = css`
    margin-right: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;

export const SUserInfoContainer = css`
    display: flex;
    align-items: center;
    margin-top: 2px;
    height: 15px;
    & button{
        display: flex;
        align-items: center;
        border: none;
        padding: 0;
        height: 39px;
        font-size: 13px;
        background-color: inherit;
        cursor: pointer;
    }
    & button:nth-of-type(2)::before {
        margin: 0 5px 0 5px;
        content: "·";
    }
    & button div{
        color: #8F8F8F;
    }
`;

export const SActionContainer = css`
    position: relative;
    & * {
        cursor: pointer;
    }
    & button:nth-child(1) {
        border: none;
        border-radius: 4px;
        width: 70px;
        height: 30px;
        color: #287cff;
        background-color: #eff6fe;
    }
    & button:nth-child(2) {
        border: none;
        width: 26px;
        height: 30px;
        background-color: inherit;
    }
`;

export const SReport = (isVisible) => css`
    ${isVisible ? '' : 'display: none;'}
    position: absolute;
    top: 38px;
    right: 0px;
    border: 1px solid #dee0e2;
    border-radius: 18px;
    width: 184px;
    height: 114px;
    background-color: #FFFFFF;
    & div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 17px;
        height: 56px;
        color: #333;
    }
    & div:nth-of-type(1) {
        border-bottom: 1px solid #eaeef2;
    }
`;

export const SItemImg = css`
    border-radius: 8px;
    height: 360px;
    overflow: hidden;
    & * {
        width: 100%;
        height: 100%;
    }
`;

export const SItemContent = css`
    margin-top: 10px;
    font-size: 15px;
    white-space: pre-wrap;
    color: #666;
`;

export const SItemTags = css`
    margin-top: 6px;
    display: flex;
    justify-content: flex-start;
    font-size: 13px;
    & button {
        margin: 0 4px 7px 0;
        border: none;
        border-radius: 4px;
        background-color: #f5f7f8;
    }
`;

export const SItemFooter = css`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 4px 7px 0;
        border: none;
        background-color: inherit;
    }
    & button :nth-child(1) {
        margin-right: 6px;
        width: 24px;
        height: 24px;
    }
    & div {
        color: #9A9A9A;
    }
`;

export const SItemLocationInfo = css`
    display: flex;
    justify-content: space-between;
    border: 1px solid #ecf0f2;
    border-radius: 8px;
    padding: 13px 16px 12px 15px;
`;

export const SLocationTitle = css`
    & div:nth-of-type(1) {
        font-size: 16px;
        font-weight: 900;
        color: #242424;
    }
    & div:nth-of-type(2) {
        margin-top: 4px;
        font-size: 13px;
        color: #8F8F8F;
    }
`;

export const SSaveButtonContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    & * {
        font-size: 11px;
        cursor: pointer;
    }
    & svg:nth-of-type(1) {
        width: 18px;
        height: 18px;
        color: #8F8F8F;
    }
    & button:nth-of-type(1) {
        margin-top: 6px;
        border: none;
        color: #8F8F8F;
        background-color: inherit;
    }
`;

export const SLocationInfoAdditional = css`
    display: none;
`;

export const SAdContainer = (isFirstItem) => css`
    display: none;
    ${isFirstItem ? `
        display: flex;
        justify-content: center;
    ` : ''}
`;

export const SAdContentContainer = css`
    display: flex;
    border-radius: 8px;
    padding: 20px 18px 20px 17px;
    width: 680px;
    height: 84px;
    text-decoration-line: none;
    background: linear-gradient(50.54deg,#4c73ff 1.52%,#5ca7ff 100.44%);
`;

export const AdLeft = css`
    display: flex;
    flex-grow: 1;
`;

export const AdIcon = css`
    display: flex;
    align-items: center;
    width: 44px;
    height: 44px;
    & * {
        width: 100%;
        height: 100%;
    }
`;

export const AdText = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & div:nth-of-type(1) {
        color: rgba(255,255,255,.72);
    }
    & div:nth-of-type(2) {
        font-weight: 900;
        color: #fff;
    }
    & div:nth-of-type(2) em {
        color: #ffb7e2;
    }
`;

export const AdRight = css`
    display: flex;
    align-items: center;
    transform: scaleY(1.5);
    color: #FFFFFF;
    
`;