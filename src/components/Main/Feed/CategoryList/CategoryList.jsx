import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { FiCrosshair } from 'react-icons/fi';

function CategoryList(props) {
    const selectedCategoryName = "";

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SButtons}>
                    <button css={S.SButton(selectedCategoryName === 'kFood')}>한식</button>
                    <button css={S.SButton(selectedCategoryName === 'picnic')}>피크닉</button>
                    <button css={S.SButton(selectedCategoryName === 'caffee')}>카페</button>
                    <button css={S.SButton(selectedCategoryName === 'lodgment')}>숙박</button>
                    <button css={S.SButton(selectedCategoryName === 'westernFood')}>양식</button>
                    <button css={S.SButton(selectedCategoryName === 'leisureActivity')}>레저・액티비티</button>
                    <button css={S.SButton(selectedCategoryName === 'japaneseFood')}>일식</button>
                    <button css={S.SButton(selectedCategoryName === 'historicalSite')}>역사유적</button>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;