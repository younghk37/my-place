/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 18px;
    width: 335px;
    & button {
        border: 0;
        border-radius: 8px;
        color: #fff;
        background-color: #0cc5a4;
        box-shadow: 0 2px 5px 0 rgba(0,107,88,.1);
        cursor: pointer;
    }
`;

export const SReviewButton = css`
    width: 226px;
    height: 38px;
    font-size: 15px;
`;

export const SMissionButton = css`
    width: 102px;
    height: 38px;
    font-size: 15px;
`;