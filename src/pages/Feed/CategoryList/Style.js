/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 66px;
`;

export const SContainer = (widthOfButtons) => css`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: ${widthOfButtons};
    overflow: hidden;
    & > button:nth-of-type(1) {
        position: absolute;
        z-index: 1;
        left: 0;
        border: none;
        height: 100%;
        background-color: #FFF;
    }
    & > button:nth-of-type(2) {
        position: absolute;
        z-index: 1;
        right: 0;
        border: none;
        height: 100%;
        background-color: #FFF;
    }
`;

export const SLeftButton = (isVisible) => css`
    ${isVisible ? '' : 'display: none;'}
`;

export const SButtonContainer = css`
    z-index: 0;
    display: flex;
    justify-content: flex-start;
    transition: transform 0.3s ease;
`;

export const SButton = (isSelected) => css`
    border: 1px solid #eaeef2;
    border-radius: 19px;
    padding: 0 13px;
    height: 35px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    ${isSelected ? 'color: #FFFFFF;' : 'color: #666666;'}
    ${isSelected ? 'background-color: #424242;' : 'background-color:#FFFFFF'}
`;

export const SRightButton = (isVisible) => css`
    ${isVisible ? '' : 'display: none;'}
`;