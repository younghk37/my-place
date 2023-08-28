/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    padding: 25px 20px;
    width: 100%;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    border-radius: 15px;
    padding: 34px 30px 40px 30px;
    width: 720px;
    height: 440px;
    color: #FFFFFF;
    background-image: linear-gradient(142deg,#55abab,#6fc2ac);
`;

export const SFlagImg = css`
    margin: 0 auto 15px;
    width: 19px;
    height: 20px;
`;

export const STitleTextContainer = css`
    width: 320px;
    word-wrap: break-word;
    text-align: center;

    & strong {
        font-size: 20px;
        font-weight: 900;
    }
    
    & span {
        font-size: 19px;
    }
`;

export const SSubText = css`
    margin-top: 5px;
    color: #BBEDEE;
`;

export const SImg = css`
    margin-top: 27px;
    width: 235px;
    height: 155px;
`;

export const SButton = css`
    margin: 22px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 22px;
    width: 143px;
    height: 46px;
    font-size: 16px;
    color: #FFFFFF;
    background-color: inherit;
`;