/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    width: 100%;
`;

export const SContainer = css`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 720px;
`;

export const SItem = css`
    width: 100%;
`;

export const SItemHeader = css`
    display: flex;
`;

export const SUserInfo = css`
    display: flex;
    width: 655px;
`;

export const SProfileImgBackground = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 23px;
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
    width: 56px;
    height: 56px;
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
    margin-top: 7px;
    & button{
        display: flex;
        border: none;
        padding: 0;
        height: 39px;
        font-size: 13px;
        background-color: inherit;
        cursor: pointer;
    }
    & button div{
        color: #8F8F8F;
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
    
`;

export const SItemTags = css`
    display: flex;
    justify-content: flex-start;
`;

export const SItemFooter = css`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
`;

export const SItemLocationInfo = css`
    border: 1px solid #dbdbdb;
    border-radius: 8px;
`;

export const SLocationInfoMain = css`

`;

export const SLocationTitle = css`

`;

export const SLocationInfoAdditional = css`

`;