/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    padding: 42px 0 36px;
    width: 100%;
    text-align: center;
`;

export const SFooterTop = css`
    & a {
        font-size: 14px;
        color: #8F8F8F;
        text-decoration-line: none;
    }
    & a:nth-last-of-type(1)::before {
        display: inline-block;
        margin: 2px 9px;
        width: 1px;
        height: 13px;
        content: "";
        vertical-align: top;
        background-color: #E1E1E1;
    }
`;

export const SFooterMiddle = css`
    margin-top: 12px;
    & a {
        font-size: 12px;
        color: #666666;
        text-decoration-line: none;
    }
    & a:not(:nth-last-of-type(1))::after {
        display: inline-block;
        margin: 2px 9px;
        width: 1px;
        height: 13px;
        content: "";
        vertical-align: top;
        background-color: #E1E1E1;
    }
`;

export const SFooterBottom = css`
    margin-top: 10px;
    & a {
        font-size: 12px;
        color: #666666;
        text-decoration-line: none;
    }
`;