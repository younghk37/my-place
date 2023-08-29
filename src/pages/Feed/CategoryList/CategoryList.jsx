import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { FiCrosshair } from 'react-icons/fi';

function CategoryList(props) {
    const [ selectedCategoryName, setSelectedCategoryName ] = useState();

    function click(categoryName) {
        if(selectedCategoryName === categoryName) {
            setSelectedCategoryName("");
        }else{
            setSelectedCategoryName(categoryName);
        }
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SButtons}>
                    <button css={S.SButton(selectedCategoryName === 'kFood')} onClick={() => click('kFood')}>한식</button>
                    <button css={S.SButton(selectedCategoryName === 'picnic')} onClick={() => click('picnic')}>피크닉</button>
                    <button css={S.SButton(selectedCategoryName === 'caffee')} onClick={() => click('caffee')}>카페</button>
                    <button css={S.SButton(selectedCategoryName === 'lodgment')} onClick={() => click('lodgment')}>숙박</button>
                    <button css={S.SButton(selectedCategoryName === 'westernFood')} onClick={() => click('westernFood')}>양식</button>
                    <button css={S.SButton(selectedCategoryName === 'leisureActivity')} onClick={() => click('leisureActivity')}>레저・액티비티</button>
                    <button css={S.SButton(selectedCategoryName === 'japaneseFood')} onClick={() => click('japaneseFood')}>일식</button>
                    <button css={S.SButton(selectedCategoryName === 'historicalSite')} onClick={() => click('historicalSite')}>역사유적</button>
                    <button css={S.SButton(selectedCategoryName === 'camping')} onClick={() => click('camping')}>캠핑</button>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;