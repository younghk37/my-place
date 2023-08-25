/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,1,.04);
    padding: 8px 18px 8px 15px;
    width: 100%;
    height: 53px;
    line-height: 36px;
    background-color: #06b495;
`;

export const SLeft = css`
    display: flex;
    height: 100%;
`;

export const SNaverIconContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 5px 7px;
    width: 31px;
    height: 36px;
`;

export const SIconBackground = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21px;
    height: 21px;
    background-color: white;
`;

export const SNaverIcon = css`
    width: 9.69px;
    height: 9.64px;
    color: #06b495;
`;

export const SBrandNameButton = css`
    border: none;
    background-color: #06b495;
`;

export const SBrandName = css`
    font-size: 15px;
    color: white;
    cursor: pointer;
`;

export const SRight = css`
    display: flex;
    height: 100%;
`;

export const SCouponIconContainer = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    cursor: pointer;
`;

export const SCouponIcon = css`
    transform: scale(1.3);
    transform-origin: center;
    width: 200%;
    font-size: 28px;
    color: white;
`;

export const SCouponText = css`
    position: absolute;
    font-size: 12px;
    color: white;
`;

export const SMenuToggleButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 38px;
    height: 36px;
`;

export const SMenuIcon = css`
    transform: scale(1.6);
    transform-origin: center;
    width: 18px;
    font-size: 16px;
    color: white;
    cursor: pointer;
`;