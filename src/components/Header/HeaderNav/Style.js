/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 5px;
    height: 51px;
    background-color: #06b495;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 51px;
`;

export const SButton = (isSelected) => {
    return css`
    border: none;
    padding: 14px 5px;
    height: 100%;
    font-size: 17px;
    color: rgba(255,255,255,.7);
    background-color: #06b495;
    ${isSelected ? "border-bottom: 2px solid #FFFFFF;" : ""}
    ${isSelected ? "font-weight: 900;" : ""}
    ${isSelected ? "color: #FFFFFF;" : ""}
    cursor: pointer;
`};