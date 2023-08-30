/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = (isModalOpen) => css`
    display: none;
    ${
        isModalOpen ?
        `
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.6);
        `
        : ''
    }
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 12px;
    width: 335px;
    height: 153px;
    overflow: hidden;
    background-color: #FFFFFF;
`;

export const SMain = css`
    padding: 36px 18px 21px;
    font-size: 15px;
    letter-spacing: -1.2px;
    white-space: pre-line; /* Preserve line breaks */
    color: #666666;
`;

export const SFooter = css`
    display: flex;
    border-top: 1px solid #ecf0f2;
    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        width: 100%;
        height: 53px;
        font-size: 15px;
        background-color: inherit;
        cursor: pointer;
    }
    & button:nth-of-type(2) {
        border-left: 1px solid #ecf0f2;
        color: #00B49B;
    }
`;