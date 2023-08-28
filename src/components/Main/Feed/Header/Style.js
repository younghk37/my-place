/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 66px;
    background-color: #F8F9FA;
`;

export const SContainer = css`
    display: flex;
`;

export const SButtons = css`
    display: flex;
    justify-content: flex-start;
    width: 622px;
    & div {
        padding: 6px 0 6px 8px;
    }
    & div:nth-of-type(1) {
        padding-left: 20px;
    }
    & div:nth-last-of-type(1) {
        padding-right: 20px;
    }
`;

export const SButton = (isSelected) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    padding: 0 13px;
    height: 42px;
    font-size: 15px;
    ${isSelected ? 'font-weight: 600;' : ''}
    ${isSelected ? 'color:white;' : 'color:black;'}
    ${isSelected ? 'box-shadow: 0 2px 6px 0 rgba(37,146,255,.35);' : 'box-shadow: 0 2px 6px rgba(0,0,0,.06);'}
    ${isSelected ? 'background-color: #2d8dee;' : 'background-color:#FFFFFF;'}
    & svg {
      width: 10px;
      height: 10px;
      margin-right: 5px; /* SVG와 텍스트 사이의 간격을 설정 */
    }
`;

export const SLocationButtonContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SLocationButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 42px;
    font-size: 15px;
    font-weight: 600;
    color: #7F8DAA;
    background-color: inherit;
    & :nth-of-type(1){
        margin-right: 4px;
    }
`;