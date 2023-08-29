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

export const SLocationInfoMain = css`

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
`;

export const SLocationInfoAdditional = css`

`;

export const SAd = (isFirstItem) => css`
    display: none;
    ${isFirstItem ? `
        display: flex;
        justify-content: center;

        ` : ''}
`;