import { css } from "@emotion/react";

export const GSCommon = (isModalOpen) => css`
    * {
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        border: none;
        width: 5px;
    }
    
    *::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: #dbdbdb;
    }

    html {
        height: 100%;
        ${isModalOpen ? 'overflow: hidden;' : ''}
    }
`;