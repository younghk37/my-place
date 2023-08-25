import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { PiPencilSimpleLineFill } from 'react-icons/pi';
import { FiCheckCircle } from 'react-icons/fi';

function HeaderActions(props) {
    return (
        <div css={S.SLayout}>
            <button css={S.SReviewButton}><PiPencilSimpleLineFill /> 리뷰 쓰기</button>
            <button css={S.SMissionButton}><FiCheckCircle /> 미션</button>
        </div>
    );
}

export default HeaderActions;