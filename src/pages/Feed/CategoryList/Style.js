/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 66px;
`;

export const SContainer = css`
    display: flex;
`;

export const SButtons = css`
    display: flex;
    justify-content: flex-start;
    width: 622px;
`;

export const SButton = (isSelected) => css`
    border: 1px solid #eaeef2;
    border-radius: 19px;
    padding: 0 13px;
    height: 35px;
    font-size: 14px;
    cursor: pointer;
    ${isSelected ? 'color: #FFFFFF;' : 'color:black;'}
    ${isSelected ? 'background-color: #424242;' : 'background-color:#FFFFFF'}
`;