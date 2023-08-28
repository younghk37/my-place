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
    border-radius: 19px;
    padding: 0 13px;
    height: 42px;
    ${isSelected ? 'color:white;' : 'color:black;'}
    ${isSelected ? 'background-color: #2d8dee;' : 'background-color:#FFFFFF'}
`;