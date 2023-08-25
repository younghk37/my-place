/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    margin: auto;
    padding: 0 20px;
    width: 375px;
    background-color: #06b495;
`;

export const SProfileImgBackground = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 23px;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    background-color: white;
`;

export const SProfileImgContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.05);
    width: 60px;
    height: 60px;
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
    font-size: 20px;
    font-weight: 900;
    color: white;
    cursor: pointer;
`;

export const SShareButton = css`
    border: none;
    width: 22px;
    height: 22px;
    color: white;
    background-color: inherit;
    cursor: pointer;
    & * {
        width: 19px;
        height: 16px;
    }
`;

export const SUserInfoContainer = css`
    margin-top: 7px;
    & button{
        border: none;
        padding: 0;
        width: 60px;
        height: 39px;
        background-color: inherit;
        cursor: pointer;
    }
    & button:not(:nth-last-of-type(1)){
        border-right: 1px solid #04A07C80;
        padding-right: 9px;
    }
    & button:not(:nth-of-type(1)){
        padding-left: 9px;
    }
    & button div:nth-of-type(1){
        color: #99ECDD;
    }
    & button div:nth-of-type(2){
        font-size: 17px;
        color: #FFFFFF;
    }
`;